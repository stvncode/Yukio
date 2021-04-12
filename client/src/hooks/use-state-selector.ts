import { flow, Predicate, Refinement } from "fp-ts/lib/function";
import { Getter, Lens, Optional, Prism, Iso, Fold } from "monocle-ts";
import { useSelector } from "react-redux";

export const useStateSelector = <S>() => <SS>(stateOptic: Lens<S, SS>) => ({
    lens: <A>(lens: Lens<SS, A>) => useSelector(stateOptic.composeLens(lens).get),
    getter: <A>(getter: Getter<SS, A>) => useSelector(stateOptic.composeGetter(getter).get),
    optional: <A>(optional: Optional<SS, A>) =>
        useSelector(stateOptic.composeOptional(optional).getOption),
    prism: <A>(prism: Prism<SS, A>) => useSelector(stateOptic.composePrism(prism).getOption),
    iso: <A>(iso: Iso<SS, A>) => useSelector(stateOptic.composeIso(iso).get),
    fold: <A>(fold: Fold<SS, A>) => ({
        exist: (predicate: Predicate<A>) => useSelector(stateOptic.composeFold(fold).exist(predicate)),
        find: <B extends A>(predicate: Refinement<A, B>) =>
            useSelector(stateOptic.composeFold(fold).find(predicate))
    }),
    selector: <A>(selector: (s: SS) => A) => useSelector(flow(stateOptic.get, selector))
})
