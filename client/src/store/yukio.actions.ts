import { Action } from '../prelude/redux/redux'
import { ofType, unionize, UnionOf } from '../prelude/unionize/unionize-usage'

export interface ShowButton extends Action<'ShowButton'> { }
export const showButton = ofType<ShowButton>('ShowButton')

export interface DisabledButton extends Action<'DisabledButton'> { }
export const disabledButton = ofType<DisabledButton>('DisabledButton')

export const yukioActions = unionize({
    ...showButton,
    ...disabledButton
})

export type YukioActions = UnionOf<typeof yukioActions>