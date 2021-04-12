import { YukioActions } from './yukio.actions'
import { yukioStateLens, initialYukioState } from './yukio.state'

export const yukioReducer = YukioActions.createReducer(initialYukioState)({ShowButton: () => yukioStateLens.set(true),
    DisabledButton: () => yukioStateLens.set(false)})