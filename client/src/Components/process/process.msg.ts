import { translate } from 'typed-intl'

export const ProcessMsg = translate({
    step: (step: number) => `Etape ${step} / 9`
}).supporting('en', {
    step: (step: number) => `Step ${step} / 9`
})