/**
 * !!! This file is autogenerated do not edit by hand !!!
 *
 * Generated by: @databases/pg-schema-print-types
 * Checksum: ATfCSRfkMrjOLfV2SBKlPxrzRQGH/0zA303Bib6s3H/FYQ8bgCNbQDlXeONkGS+ovW0RQ5/PfYeSBsne7vG8fA==
 */

/* eslint-disable */
// tslint:disable

import CatColor from './cat_color'

interface Cat {
  cat_color_id: CatColor['id'] | null
  cat_name: string | null
  date_of_birth: Date | null
  /**
   * @default nextval('cat_id_seq'::regclass)
   */
  id: number & { readonly __brand?: 'cat_id' }
}
export default Cat

interface Cat_InsertParameters {
  cat_color_id?: CatColor['id'] | null
  cat_name?: string | null
  date_of_birth?: Date | null
  /**
   * @default nextval('cat_id_seq'::regclass)
   */
  id?: number & { readonly __brand?: 'cat_id' }
}
export type { Cat_InsertParameters }