import { Kind, URIS } from 'fp-ts/lib/HKT'
import { getJoinMonoid, Monoid } from 'fp-ts/lib/Monoid'
import { AnyNewtype } from 'newtype-ts'
import { NewTypeType } from '../io-ts-types/newtype'
import { OpaqueTagged, OpaqueWithTC } from '../opaque'
import { boundedAbsoluteValue } from './ord'

declare module 'fp-ts/lib/HKT' {
    interface URItoKind<A> {
        Monoid: Monoid<A>
    }
}

export interface InvariantKind<F extends URIS> {
    readonly URI: F
    readonly imap: <A, B>(fa: Kind<F, A>, f: (a: A) => B, g: (b: B) => A) => Kind<F, B>
}

export const URI = 'Monoid'

export type URI = typeof URI

export const monoid: InvariantKind<URI> = {
    URI,
    imap: (fa, f, g) => {
        const { concat, empty } = fa
        return {
            concat: (x, y) => f(concat(g(x), g(y))),
            empty: f(empty)
        }
    }
}

export const monoidMaxAbsoluteNumber = getJoinMonoid(boundedAbsoluteValue)

export const monoidFromOpaque = <O extends OpaqueTagged<any, any>>(
    o: OpaqueWithTC<O>,
    m: Monoid<O['-value']>
): Monoid<O> => monoid.imap(m, o.wrap, o.unwrap)

export const monoidFromNewType = <I extends AnyNewtype>(
    i: NewTypeType<I>,
    m: Monoid<I['_A']>
): Monoid<I> => monoid.imap(m, i.wrap, i.unwrap)