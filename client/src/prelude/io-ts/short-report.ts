import * as arrays from 'fp-ts/lib/Array'
import * as O from 'fp-ts/lib/Option'
import * as t from 'io-ts'
import { pipe } from 'fp-ts/lib/pipeable'

/**
 * The insecure variant of `shortReport` which may leak sensitive information.
 * To use only in development.
 *
 * @param errors
 */
export const shortReportInsecure = (errors: t.ValidationError[]): string =>
  errors
    .map(error => {
      const contextArray = new Array(...error.context)
      const expectedType = arrays.last(contextArray)
      const outerType = arrays.lookup(contextArray.length - 2, contextArray)

      const msg = `${error.context.map(c => c.key).join('/')}: expecting type <${pipe(
        expectedType,
        O.fold(() => 'UNKNOWN', x => x.type.name)
      )}> ${
        O.isSome(outerType) ? `in Type ${outerType.value.type.name}` : ''
      } Got value <${JSON.stringify(error.value)}>, type: ${typeof error.value}`
      return msg
    })
    .join('\n')

/**
 * A short reporter made to report less verbose (so, more readable) messages than native `io-ts` `PathReporter`.
 * @param errors
 */
export const shortReport = (errors: t.ValidationError[]): string =>
  errors
    .map(error => {
      const contextArray = new Array(...error.context)
      const expectedType = arrays.last(contextArray)
      const outerType = arrays.lookup(contextArray.length - 2, contextArray)

      const msg = `${error.context.map(c => c.key).join('/')}: expecting type <${pipe(
        expectedType,
        O.fold(() => 'UNKNOWN', x => x.type.name)
      )}> ${O.isSome(outerType) ? `in Type ${outerType.value.type.name}` : ''} Got invalid value`
      return msg
    })
    .join('\n')
