import * as uz from 'unionize'
import { ofTypeForTag } from './unionize'

const unionizeTagOptions = {
    tag: 'type' as 'type'
}
const ofType = ofTypeForTag('type')

const unionize = <R extends string>(record: uz.MultiValueRec<R>) =>
    uz.unionize(record, unionizeTagOptions)

const oneOf = <UT extends uz.UnionTypes<any, any>>(u: UT) => <
    TagProp extends keyof typeof u['_Record'][keyof typeof u['_Record']]
>(
    tag: TagProp
) => <K extends keyof typeof u['_Record']>(
    ...keys: K[]
): (<X extends typeof u['_Record'][keyof typeof u['_Record']]>(
    x: X
) => x is Extract<(typeof u['_Record'])[K], X>) => ((x: any) => keys.indexOf(x[tag]) !== -1) as any

const isGen = <A extends { type: any }>() => <
    T extends A['type'],
    B extends Extract<A, { type: T }>
>(
    types: T[] | T
) => (action: A): action is B =>
        Array.isArray(types) ? types.indexOf(action.type) !== -1 : action.type === types

const makeFilter = <O extends string>(p: O[]) => <All extends { type: any }>() => isGen<All>()(p)

const discriminants = <U extends { is: any }>(o: U): (keyof ((typeof o)['is']))[] =>
    Object.keys(o.is)

export type { UnionOf, Unionized, MultiValueVariants } from 'unionize'
export { oneOf, ofType, unionize, makeFilter, discriminants }