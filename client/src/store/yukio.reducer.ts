import { YukioActions } from './yukio.actions'
import { yukioLens, initialYukioState } from './yukio.state'

export const yukioReducer = YukioActions.createReducer(initialYukioState)({
    ShowCookies: () => yukioLens.set(true),
    DisabledCookies: () => yukioLens.set(false)
})