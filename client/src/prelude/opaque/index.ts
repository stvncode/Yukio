import { Endomorphism, identity } from 'fp-ts/lib/function'
import { Ord, ordNumber, ordString } from 'fp-ts/lib/Ord'
import * as t from 'io-ts'
import { number, string } from 'io-ts'
import { UUID } from 'io-ts-types/lib/UUID'
import * as uuid from 'uuid'
import { createAnnotator } from '../annotations/annotations'
import * as as from '../io-ts/as'

export interface TypedId<Type extends string, Id> {
    type: Type
    id: Id
}

export const opaqueAnnotation = createAnnotator()

export type ValueOf<T extends OpaqueTagged<any, any, any>> = T['-value']
export type IdOf<T extends OpaqueTagged<any, any, any>> = T['-uniqueIdentifier']

export interface OpaqueIso<O extends OpaqueTagged<any, any, any>> {
    wrap: (v: ValueOf<O>) => O
    unwrap: (v: O) => ValueOf<O>
    modify: (f: (a: ValueOf<O>) => ValueOf<O>) => (a: O) => O
}

export interface OpaqueType<O extends OpaqueTagged<any, any, any>> {
    Type: as.TypeO<O, ValueOf<O>>
}
export interface Opaque<O extends OpaqueTagged<any, any, any>>
    extends OpaqueType<O>,
    OpaqueIso<O> { }

export interface OpaqueTagged<V, T extends string, P = never> {
    readonly '-value': V
    readonly '-uniqueIdentifier': T
    readonly '-typeParam': P
}

export type TagOfOpaque<T extends OpaqueTagged<any, any, any>> = T['-uniqueIdentifier']

/**
 * White lie ALL WAY DOWN!
 */
export const opaqueOf =
    //
    <T extends string>(_x: T) => <O extends OpaqueTagged<any, any, T> = never>(
        type: as.TypeO<ValueOf<O>, ValueOf<O>>,
        tag: TagOfOpaque<O>
    ): Opaque<O> & OpaqueIso<O> =>
    ({
        Type: opaqueAnnotation.withAnnotation(type, tag),
        wrap: identity,
        unwrap: identity
    } as any)

export interface OpaqueWithTC<O extends OpaqueTagged<any, any, any>> extends Opaque<O>, Ord<O> { }
export interface OpaqueTypeWithTC<O extends OpaqueTagged<any, any, any>>
    extends OpaqueType<O>,
    Ord<O> { }

export const opaqueWithTC =
    //
    <T extends string>(_x: T) => <O extends OpaqueTagged<any, any, T> = never>(
        Type: ValueOf<O> extends string ? typeof t.string : typeof t.number, // as.TypeO<ValueOf<O>, ValueOf<O>>,
        o: Ord<ValueOf<O>>,
        tag: TagOfOpaque<O>
    ): OpaqueWithTC<O> & OpaqueIso<O> => ({
        ...o,
        Type: opaqueAnnotation.withAnnotation(Type, tag) as any,
        wrap: identity,
        unwrap: identity,
        modify: (f: (a: O) => O) => f
    })

export const opaqueTypeWithTC =
    //
    <T extends string>(_x: T) => <O extends OpaqueTagged<any, any, T> = never>(
        Type: as.TypeO<ValueOf<O>, ValueOf<O>>,
        o: Ord<ValueOf<O>>,
        tag: TagOfOpaque<O>
    ): OpaqueTypeWithTC<O> => ({
        ...o,
        Type: opaqueAnnotation.withAnnotation(Type, tag)
    })

export const opaqueOfTC = opaqueWithTC<never>('' as never)

export const opaque = opaqueOf<never>('' as never)

export const opaqueOfNumber = <T extends OpaqueTagged<number, any, T> = never>(
    tag: TagOfOpaque<T>
): OpaqueWithTC<T> => opaqueWithTC('' as TagOfOpaque<T>)(number as any, ordNumber, tag)

export const opaqueOfString = <T extends OpaqueTagged<string, any, T> = never>(
    tag: TagOfOpaque<T>
): OpaqueWithTC<T> => opaqueWithTC('' as TagOfOpaque<T>)(string as any, ordString, tag)

/**
 *
 * @param tag
 * @deprecate use opaqueOfUUID2v instead
 */
export const opaqueOfUUID = <T extends OpaqueTagged<string, any, T> = never>(
    tag: TagOfOpaque<T>
): OpaqueUUIDWithTC<T> => ({
    ...opaqueWithTC('' as TagOfOpaque<T>)(string as any, ordString, tag),
    newId: () => (uuid.v4() as any) as T
})

export interface OpaqueUUIDWithTC<O extends OpaqueTagged<any, any, any>> extends Opaque<O>, Ord<O> {
    newId: () => O
}

export interface OpaqueTypeUUIDWithTC<O extends OpaqueTagged<any, any, any>>
    extends OpaqueType<O>,
    Ord<O> {
    fromUUID: (u: UUID) => O
    wrap: (u: UUID) => O
    toUUID: (o: O) => UUID
    unwrap: (o: O) => UUID
    modify: (f: Endomorphism<UUID>) => Endomorphism<O>
    newId: () => O
}

/**
 * Opaque of UUID constructor
 * This opaque is guaranteed to hold only a valid UUID value
 * @param tag just a string to tag your opaque of UUID
 */
export const opaqueOfUUID2v = <T extends OpaqueTagged<string, any, T> = never>(
    tag: TagOfOpaque<T>
): OpaqueTypeUUIDWithTC<T> => ({
    ...opaqueTypeWithTC('' as TagOfOpaque<T>)(UUID as any, ordString, tag),
    wrap: u => (u as unknown) as T,
    unwrap: o => (o as unknown) as UUID,
    modify: identity as any,
    fromUUID: u => (u as unknown) as T,
    toUUID: o => (o as unknown) as UUID,
    newId: () => (uuid.v4() as unknown) as T
})