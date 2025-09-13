/* eslint-disable @typescript-eslint/no-explicit-any */
import type HttpQueryFilter from '../interfaces/http-query/http.query.filter.interface';
import HttpQueryFilterType from '@enums/http-query/http.query.filter.type.enum';
import type HttpQuerySort from '../interfaces/http-query/http.query.sort.interface';
import HttpQuerySortType from '@enums/http-query/http.query.sort.type.enum';
import _ from 'lodash';

/**
 * Class with query string attributes, it is used to perform queries applying pagination, filters, sorting and column selection.
 */
export default class HttpQuery {
   /**
    * Contains the current page of pagination.
    */
   page?: number | undefined;

   /**
    * Contains the limit of pagination, define how many items will come in request.
    */
   limit?: number | undefined;

   /**
    * Contains the total of items in backend, used to control the pagination.
    * @default 0
    */
   total: number;

   /**
    * Contains the filters that will be applied to the request.
    * @default []
    */
   filters: HttpQueryFilter[] = [];

   /**
    * Contains the sorts that will be applied to the request.
    * @default []
    */
   sorts: HttpQuerySort[] = [];

   constructor(query: {
      page?: number | undefined;
      limit?: number;
      total?: number;
      filters?: HttpQueryFilter[];
      sorts?: HttpQuerySort[];
   }) {
      this.page = query.page;
      this.limit = query.limit;
      this.total = query.total ? query.total : 0;

      if (query.sorts) {
         this.sorts = query.sorts;
      }
      if (query.filters) {
         this.filters = query.filters;
      }
   }

   /**
    * Appends options in url using ? or &.
    * @param {string} sourceUrl Url that will be modified.
    * @param {string} option Filter, pagination, sort, or others options possible in query string.
    * @returns {string} Url result.
    */
   appendOptionInUrl(sourceUrl: string, option: string): string {
      let resultUrl = sourceUrl;

      if (!resultUrl.length) {
         resultUrl = `?${option}`;
      } else {
         resultUrl += `&${option}`;
      }

      return resultUrl;
   }

   /**
    * Transform all attributes of class in query string that will be used in request.
    * @returns {string} Text of query string.
    * @example 'page=1&limit=5&sort=-churn_rate'
    */
   toQueryString(): string {
      let url = '';

      // 1. Mount query string responsible for page.
      if (this.page !== undefined) {
         url = this.appendOptionInUrl(url, `page=${this.page}`);
      }

      // 2. Mount query string responsible for limit.
      if (this.limit !== undefined) {
         url = this.appendOptionInUrl(url, `limit=${this.limit}`);
      }

      // 3. Mount query string responsible for sort.
      if (this.sorts && this.sorts.length) {
         const sortFields: string[] = [];

         this.sorts.forEach((item) => {
            if (item.type === HttpQuerySortType.DESCENDING) {
               sortFields.push(`-${item.field}`);
            } else {
               sortFields.push(`${item.field}`);
            }
         });

         url = this.appendOptionInUrl(url, `sort=${sortFields.join(',')}`);
      }

      // 4. Mount query string responsible for filter.
      if (this.filters && this.filters.length) {
         const getFilterByType = (filter: string, type: HttpQueryFilterType) => {
            let resultFilter: string = filter;

            switch (type) {
               case HttpQueryFilterType.PREFIX:
                  resultFilter = `*${filter}`;
                  break;
               case HttpQueryFilterType.SUFFIX:
                  resultFilter = `${filter}*`;
                  break;
               case HttpQueryFilterType.SUBSTRING:
                  resultFilter = `*${filter}*`;
                  break;
            }

            return resultFilter;
         };

         const groupedNonUniqueFilters: { [key: string]: any[] } = _.groupBy(
            this.filters.filter((filter) => !filter.unique),
            'field',
         );

         const formattedNonUniqueFilters: string[] = [];
         Object.keys(groupedNonUniqueFilters).forEach((key) => {
            const filters: string[] = [];

            groupedNonUniqueFilters[key]?.forEach((filterObject) => {
               filters.push(
                  encodeURIComponent(
                     getFilterByType(filterObject.filter, filterObject.type),
                  ),
               );
            });

            formattedNonUniqueFilters.push(`${key}=${filters.join(',')}`);
         });

         const formattedUniqueFilters: string[] = this.filters
            .filter((filter) => filter.unique === true)
            .map(
               (filter) =>
                  `${filter.field}=${getFilterByType(filter.filter, filter.type)}`,
            );

         url = this.appendOptionInUrl(
            url,
            `${formattedNonUniqueFilters.concat(formattedUniqueFilters).join('&')}`,
         );
      }

      return url;
   }

   /**
    * Get the number of availables pages using total and limit variables.
    * @returns {number} Total of pages.
    */
   get totalPages(): number {
      if (this.limit === undefined) {
         return 0;
      }

      return Math.ceil(this.total / this.limit);
   }

   /**
    * Gets the number of the first item of page.
    * @returns {number} First item value in specific page.
    */
   get firstPageItem(): number {
      if (this.limit === undefined || this.page === undefined || this.total === 0) {
         return 0;
      }

      return this.page * this.limit - this.limit + 1;
   }

   /**
    * Gets the number of the last item of page.
    * @returns {number} Last item value in specific page.
    */
   get lastPageItem(): number {
      if (this.limit === undefined || this.page === undefined || this.total === 0) {
         return 0;
      }

      if (this.page * this.limit > this.total) {
         return this.total;
      } else {
         return this.page * this.limit;
      }
   }
}