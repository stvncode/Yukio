export type Compact<A> = { [k in keyof A]: A[k] }

export type FStruct<R extends Record<any, any>, K extends keyof R = keyof R> = {
    [k in K]: { [kv in R[k]]: R extends { [r in k]: kv } ? Compact<R> : never }
}

export type Match<StructK, R> = { [KV in keyof StructK]: (v: StructK[KV]) => R }
export type MatchWithDefault<StructK, R> =
    | Match<StructK, R>
    | { [KV in keyof StructK]?: (v: StructK[KV]) => R } & {
        default: (v: StructK[keyof StructK]) => R
    }

export const folderWiden = <A extends object>() => <D extends keyof A>(discr: D) => <
    M extends Match<FStruct<A>[D], any>
>(
    match: M
) => (a: A): M[keyof M] extends (a: any) => infer R ? R : never => match[a[discr]](a)
/**
 * Usage:
 * type A = { type: 'A'; value: 'toto'; x: string } | { type: 'B'; value: 'tata'; y: number }
 * folder<A>()('type')<string>({
 *   A: _x => 'aaaa',
 *   B: _y => 'zzz'
 * })
 *
 */
export const folder = <A extends object>() => <D extends keyof A>(discr: D) => <R>(
    match: Match<FStruct<A>[D], R>
) => (a: A): R => match[a[discr]](a as any)

export const folderWithDefault = <A extends object>() => <D extends keyof A>(discr: D) => <R>(
    match: MatchWithDefault<FStruct<A>[D], R>
) => (a: A): R => (match[a[discr]] ? match[a[discr]] : (match as any).default)(a as any)

type MatchPrimitiveL<A extends keyof any, R> = { [K in A]: (k: K) => R }

type MatchPrimitive<A extends keyof any, R> = { [K in A]: R }

export const folderPrimitiveL = <A extends keyof any>() => <R>(match: MatchPrimitiveL<A, R>) => (
    a: A
): R => match[a](a)

export const folderPrimitive = <A extends keyof any>() => <R>(match: MatchPrimitive<A, R>) => (
    a: A
): R => match[a]