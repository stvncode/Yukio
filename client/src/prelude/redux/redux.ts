import { array } from 'fp-ts/lib/Array'
import { recycle } from '../recycle/recycle'

export interface Action<K extends string> {
    readonly type: K
}

export type ActionType<A extends Action<any>> = A['type']

export interface AnyAction extends Action<'any'> { }

export type FilterAction<A, K> = Extract<A, { type: K }>

export const isGen = <A extends Action<any>>() => <
    T extends ActionType<A>,
    B extends FilterAction<A, T>
>(
    types: T[] | T
) =>
    Array.isArray(types)
        ? (action: A): action is B => types.indexOf(action.type) !== -1
        : (action: A): action is B => action.type === types

export type Handlers<S, A extends Action<any>> = {
    [T in ActionType<A>]: (s: S, a: FilterAction<A, T>) => S
}

export const createReducer = <S, A extends Action<any>>(
    initialState: S,
    handlers: Handlers<S, A>
): Reducer<S> => (state = initialState, action: A | AnyAction) =>
        handlers.hasOwnProperty(action.type) && action.type !== 'any'
            ? recycle(state, handlers[action.type as ActionType<A>](state, action as any))
            : state

export interface Reducer<S> {
    (s: S | undefined, a: Action<any>): S
}

type ReducersMap<S> = { [K in keyof S]: Reducer<S[K]> }

export const combineReducers = <S>(o: ReducersMap<S>, initialState: S): Reducer<S> => (
    s = initialState,
    a
): S =>
    array.reduce(Object.keys(o) as Array<keyof S>, initialState, (acc, key) =>
        Object.assign({}, acc, {
            [key]: o[key](s[key], a)
        })
    )