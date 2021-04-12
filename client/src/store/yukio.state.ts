import { Lens } from 'monocle-ts'

export interface YukioState {
    yukioState: boolean
}

export const yukioLens = Lens.fromProp<YukioState>()('yukioState')

export const initialYukioState: YukioState = {
    yukioState: false
}