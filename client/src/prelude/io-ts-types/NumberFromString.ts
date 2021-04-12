/**
 * @since 0.5.0
 */
import { either } from 'fp-ts/lib/Either'
import * as t from 'io-ts'

export class NumberFromStringType extends t.Type<number, string> {
    readonly _tag: 'NumberFromStringType' = 'NumberFromStringType'
    constructor() {
        super(
            'NumberFromString',
            t.number.is,
            (u, c) =>
                either.chain(t.string.validate(u, c), s => {
                    const n = +s
                    return isNaN(n) || s.trim() === '' ? t.failure(u, c) : t.success(n)
                }),
            String
        )
    }
}

/**
 * @since 0.5.0
 */
export interface NumberFromStringC extends NumberFromStringType { }

/**
 * @example
 * import { NumberFromString } from '@libertrip/prelude/io-ts-types/NumberFromString'
 *
 * NumberFromString.decode('1') // right(1)
 * NumberFromString.decode('1.1') // right(1.1)
 *
 * @since 0.5.0
 */
export const NumberFromString: NumberFromStringC = new NumberFromStringType()