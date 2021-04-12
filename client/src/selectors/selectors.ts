import { stateYukioLens } from "../core/state";
import { yukioLens } from "../store/yukio.state";

export const yukioSelector = stateYukioLens.composeLens(yukioLens)