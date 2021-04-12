import { Bounded } from 'fp-ts/lib/Bounded'
import { Eq } from 'fp-ts/lib/Eq'
import { fromCompare, gt, lt, max, Ord, ord, ordNumber, ordString } from 'fp-ts/lib/Ord'
import { Ordering } from 'fp-ts/lib/Ordering'

export type ValueOf<T> = T[keyof T]
export type Values<Tag extends string, B> = ValueOf<{ [k in keyof B]: { [K in Tag]: k } & B[k] }>

/**
 *
 * Relative order: string, number, symbol.
 * @param a
 * @param b
 */
export const ordPropertyKey: Ord<PropertyKey> = {
    equals: (a: PropertyKey, b: PropertyKey): boolean => {
        if (typeof a === 'string') {
            return typeof b === 'string' && a === b
        } else if (typeof a === 'number') {
            return typeof b === 'number' && a === b
        } else {
            return typeof b === 'symbol' && a === b
        }
    },
    compare: (a: PropertyKey, b: PropertyKey): Ordering => {
        if (typeof a === 'string') {
            return typeof b === 'string' ? ordString.compare(a, b) : 1
        } else if (typeof a === 'number') {
            return typeof b === 'number' ? ordNumber.compare(a, b) : typeof b === 'string' ? -1 : 1
        } else {
            return typeof b === 'symbol' ? ordString.compare(a.toString(), b.toString()) : -1
        }
    }
}

export const getUnionSetoid = <Tag extends string, B extends { [k: string]: any }>(
    tag: Tag,
    bodies: { [k in keyof B]: Eq<B[k]> }
): Eq<Values<Tag, B>> => ({
    equals: (a: Values<Tag, B>, b: Values<Tag, B>): boolean => {
        const aTagValue = (a[tag] as any) as keyof B
        return (
            ordPropertyKey.equals(aTagValue, (b[tag] as any) as keyof B) && bodies[aTagValue].equals(a, b)
        )
    }
})

export const getUnionOrd = <Tag extends string, B extends { [k: string]: any }>(
    tag: Tag,
    bodies: { [k in keyof B]: Ord<B[k]> }
): Ord<Values<Tag, B>> => ({
    ...getUnionSetoid(tag, bodies),
    compare: (a: Values<Tag, B>, b: Values<Tag, B>): Ordering => {
        const aTagValue = (a[tag] as any) as keyof B
        const typeOrd = ordPropertyKey.compare(aTagValue, (b[tag] as any) as keyof B)
        return typeOrd !== 0 ? typeOrd : bodies[aTagValue].compare(a, b)
    }
})

export const ordEmpty = fromCompare((_a: {}, _b: {}) => 0)

export const ordAbsoluteValue = ord.contramap(ordNumber, (n: number) => Math.abs(n))

export const boundedAbsoluteValue: Bounded<number> = {
    ...ordAbsoluteValue,
    bottom: 0,
    top: Infinity
}

export const getOrdUtils = <A>(ord: Ord<A>) => ({
    gt: gt(ord),
    lt: lt(ord),
    max: max(ord)
})