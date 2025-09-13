/**
 * Enum with filter types existents in HttpQuerySort.
 * @enum {string}
 */
export enum HttpQueryFilterType {
   /**
    * Value representing PREFIX filter type.
    */
   PREFIX = 'prefix',

   /**
    * Value representing SUFFIX filter type.
    */
   SUFFIX = 'suffix',

   /**
    * Value representing SUBSTRING filter type.
    */
   SUBSTRING = 'substring',

   /**
    * Value representing EXACT filter type.
    */
   EXACT = 'exact',
}

export default HttpQueryFilterType;