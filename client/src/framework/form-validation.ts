import {
    GetFieldDecoratorOptions,
    ValidationRule,
    WrappedFormUtils
  } from '@ant-design/compatible/lib/form/Form'
  import { mapKeysProps } from '../prelude/fp/object'
  import { shortReport, shortReportInsecure } from '../prelude/io-ts/short-report'
  import { array } from 'fp-ts/lib/Array'
  import * as E from 'fp-ts/lib/Either'
  import { Either, left, right } from 'fp-ts/lib/Either'
  import { identity } from 'fp-ts/lib/function'
  import * as NEA from 'fp-ts/lib/NonEmptyArray'
  import * as O from 'fp-ts/lib/Option'
  import { Option } from 'fp-ts/lib/Option'
  import { pipe } from 'fp-ts/lib/pipeable'
  import { Throwable } from 'funfix-core'
  import { Future, FutureMaker } from 'funfix-exec'
  import * as t from 'io-ts'

  const removeEmptyStringEntries = (pf: PropFilters) => (obj: unknown) =>
  typeof obj === 'object' && obj !== null
    ? mapKeysProps(obj)((k, p) => (pf.hasOwnProperty(k) ? pf[k](p) : p))
    : obj

type PropFilter = (v: unknown) => unknown | undefined
type PropFilters = Record<string, PropFilter>
export const validateFilteredFields = <T extends t.InterfaceType<any, any>>(
    Type: T,
    propsTransformers: PropFilters,
    options?: { onError?: (s: Throwable) => void }
  ) => (form: WrappedFormUtils): Future<Either<string, t.TypeOf<typeof Type>>> => {
    const filter = removeEmptyStringEntries(propsTransformers)
    const fm = FutureMaker.empty<Either<string, t.TypeOf<typeof Type>>>()
    form.validateFieldsAndScroll((err: unknown | undefined | null, values: unknown) =>
      fm.success(
        err === undefined || err === null
          ? pipe(Type.decode(filter(values)), E.mapLeft(shortReportInsecure))
          : left(`cannot validate fields, validation errors remaining: ${JSON.stringify(err)}`)
      )
    )
    const f = fm.future()
    const { onError } = options === undefined ? { onError: undefined } : options
    if (onError !== undefined) {
      f.onComplete(res =>
        res.fold(
          err => onError(`Execution error ${err}`),
          res => {
            if (E.isLeft(res)) {
              onError(res.left)
            }
          }
        )
      )
    }
    return f
  }

export const validateFields = <T extends t.InterfaceType<any, any>>(
    Type: T,
    options?: { onError?: (s: Throwable) => void }
  ) => validateFilteredFields(Type, {}, options)  