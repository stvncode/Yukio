import { translate } from "typed-intl";
import { folderType } from "./StringAlert";

export const typeMsg = translate({
    typeLabel: folderType({
        error: 'Erreur',
        warning: 'Attention',
        info: 'Info'
    })
}).supporting('en', {
    typeLabel: folderType({
        error: 'Error',
        warning: 'Warning',
        info: 'Info'
    })
})
