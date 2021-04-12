import { YukioActions } from './yukio.actions'
import { yukioLens, initialYukioState } from './yukio.state'

export const yukioReducer = YukioActions.createReducer(initialYukioState)({
    ShowButton: () => yukioLens.set(true),
    DisabledButton: () => yukioLens.set(false)
})