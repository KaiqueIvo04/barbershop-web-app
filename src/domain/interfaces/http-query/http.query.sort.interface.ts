import type HttpQuerySortType from '@enums/http-query/http.query.sort.type.enum';

/**
 * Map sorts attributes of HttpQuery class.
 * @example {
 *             field: 'name',
 *             type: HttpQuerySortType.DESCENDING
 *          }
 */
export default interface HttpQuerySort {
   /**
    * Contains the field of query sort, the items will be ordering by this attribute.
    * @example 'name'
    */
   field: string;

   /**
    * @type {HttpQuerySortType}
    * Contains the type of query sort, this attribute defines if ordering is ascending or descending.
    * @example HttpQuerySortType.DESCENDING
    */
   type: HttpQuerySortType;
}