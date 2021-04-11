import { createReducer } from '../prelude/redux/redux'
import { YukioActions } from './yukio.actions'
import { YukioState, yukioStateLens, initialYukioState } from './yukio.state'

export const yukioReducer = createReducer<YukioState, YukioActions>(initialYukioState, {
    ShowButton: yukioStateLens.set(true),
    DisabledButton: yukioStateLens.set(false)
})