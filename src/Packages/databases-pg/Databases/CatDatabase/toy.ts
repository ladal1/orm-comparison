/**
 * !!! This file is autogenerated do not edit by hand !!!
 *
 * Generated by: @databases/pg-schema-print-types
 * Checksum: mFSTZ9sJf8BUtpkoyf1EmJ2h7SqGXAEtDW7Kf8s7Hwb1072Xi25DMo8DhRY3PQMVy1TswzZZhR1fIeKywjkWmw==
 */

/* eslint-disable */
// tslint:disable

import ToysProducer from './toys_producer'

interface Toy {
  barcode: string
  currency: string
  /**
   * @default nextval('toy_id_seq'::regclass)
   */
  id: number & { readonly __brand?: 'toy_id' }
  naughty: string | null
  price: string
  toy_name: string
  toys_producer_id: ToysProducer['id'] | null
}
export default Toy

interface Toy_InsertParameters {
  barcode: string
  currency: string
  /**
   * @default nextval('toy_id_seq'::regclass)
   */
  id?: number & { readonly __brand?: 'toy_id' }
  naughty?: string | null
  price: string
  toy_name: string
  toys_producer_id?: ToysProducer['id'] | null
}
export type { Toy_InsertParameters }
