import type HttpQueryFilterType from "@enums/http-query/http.query.filter.type.enum";

/**
 * Map filters attributes of HttpQuery class.
 * @example {
 *             field: 'city',
 *             filter: 'Campina',
 *             type: QueryFilterType.SUBSTRING
 *          }
 */
export default interface HttpQueryFilter {
   /**
    * Contains the field of query filter, this attribute will be used to build first part of filter (`field=...`).
    * @example 'name'
    */
   field: string;

   /**
    * Contains the filter of query filter, this attribute will be used to build second part of filter (`...=filter`).
    * @example 'joao'
    */
   filter: string;

   /**
    * Contains the type of query filter, this attribute defines hows the filter will works, filter by prefix, suffix, substring or exact.
    * @example HttpQueryFilterType.SUBSTRING
    */
   type: HttpQueryFilterType;

   /**
    * This means that this filter will be unique, when calling function `toQueryString` of `HttpQuery`, it will be added to the url
    * separately, even if there is another filter with the same field as it.
    * @example true
    */
   unique?: boolean;
}