import { Lens } from 'monocle-ts'

export interface YukioState {
    yukioState: boolean
}

export const yukioStateLens = Lens.fromProp<YukioState>()('yukioState')

export const initialYukioState: YukioState = {
    yukioState: false
}