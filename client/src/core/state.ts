import { Lens } from "monocle-ts";
import { initialYukioState, YukioState } from "../store/yukio.state";

export interface State {
    yukio: YukioState
}

export const initialState: State = {
    yukio: initialYukioState
}

const stateLense = Lens.fromProp<State>()

export const stateYukioLens = stateLense('yukio')

// export const useOpticSelector = useStateSelector<State>()

// export const useYukioSelector = useOpticSelector(stateYukioLens)