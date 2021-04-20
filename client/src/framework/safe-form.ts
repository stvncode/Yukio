export const dummy = {}
// import * as React from 'react'
// import * as t from 'io-ts'
// import { flow } from 'fp-ts/lib/function'
// import { fold, mapLeft } from 'fp-ts/lib/Either'
// import { Form } from '@ant-design/compatible'
// import { FormComponentProps, FormCreateOption } from '@ant-design/compatible/lib/form'
// import { PathReporter } from 'io-ts/lib/PathReporter'
// import { pipe } from 'fp-ts/lib/pipeable'
// import { logger } from './logger'
// import { runEffect, Void } from '../prelude/fp/function'
// import { shortReportInsecure } from '../prelude/io-ts/short-report'
// import { WrappedFormUtils } from '@ant-design/compatible/lib/form/Form'

// export const createSafeForm = <T extends object>() => <P extends object>(
//   C: React.ComponentType<P & FormComponentProps<T>>
// ) => (options?: FormCreateOption<P & FormComponentProps<T>> | undefined) =>
//   Form.create<P & FormComponentProps<T>>(options)(C) as React.ComponentType<P>

//   const log = logger('SAFE FORM')

// export const getSafeFieldDecorator = <T extends object>(form: WrappedFormUtils<T>) => <
//   F extends keyof T,
//   E
// >(
//   id: F,
//   codec: t.Type<T[F], E>,
//   renderErrors: (es: t.Errors) => SafeReactNode,
//   options?: {
//     whenValid?: Void<T[F]>
//     whenInvalid?: () => void
//     initialValue?: E
//   }
// ) => <P extends object>(Wrapped: React.ComponentType<P & { value?: E }>) => (props: P) =>
//   form.getFieldDecorator<T>(id, {
//     initialValue:
//       options !== undefined && options.initialValue !== undefined
//         ? options.initialValue
//         : undefined,
//     rules: [
//       {
//         validator: (_rule, value: unknown, callback: (n?: SafeReactNode) => void) => {
//           pipe(
//             codec.decode(value),
//             runEffect(PathReporter.report),
//             runEffect(flow(mapLeft(shortReportInsecure), v => log('VALIDATION', v))),
//             fold(
//               errors => {
//                 if (options && options.whenInvalid) {
//                   options.whenInvalid()
//                 }
//                 callback(renderErrors(errors))
//               },
//               v => {
//                 if (options && options.whenValid) {
//                   options.whenValid(v)
//                 }
//                 callback()
//               }
//             )
//           )
//         }
//       }
//     ]
//   })(<Wrapped {...props} />)

// export const getAlwaysValuedSafeFieldDecorator = <T extends object>(form: WrappedFormUtils<T>) => <
//   F extends keyof T,
//   E
// >(
//   id: F,
//   codec: t.Type<T[F], E>,
//   renderErrors: (es: t.Errors) => SafeReactNode,
//   options: {
//     whenValid?: Void<T[F]>
//     whenInvalid?: () => void
//     initialValue: T[F]
//   }
// ) => <P extends object>(
//   Wrapped: React.ComponentType<P & { value: T[F] } & { onChange?: Void<T[F]> }>
// ) => (props: P) =>
//   form.getFieldDecorator<T>(id, {
//     initialValue: codec.encode(options.initialValue),
//     rules: [
//       {
//         validator: (rule, value: unknown, callback: (n?: SafeReactNode) => void) =>
//           pipe(
//             codec.decode(value),
//             runEffect(PathReporter.report),
//             fold(
//               errors => {
//                 console.log('RULE', rule)
//                 if (options.whenInvalid) {
//                   options.whenInvalid()
//                 }
//                 callback(renderErrors(errors))
//               },
//               v => {
//                 if (options.whenValid) {
//                   options.whenValid(v)
//                 }
//                 callback()
//               }
//             )
//           )
//       }
//     ]
//   })(<Wrapped {...(props as any)} />)

// export type SafeReactNode =
//   | string
//   | number
//   | boolean
//   | React.ReactElement<
//       any,
//       | string
//       | ((
//           props: any
//         ) => React.ReactElement<
//           any,
//           string | any | (new (props: any) => React.Component<any, any, any>)
//         > | null)
//       | (new (props: any) => React.Component<any, any, any>)
//     >
//   | Array<SafeReactNode>
//   | React.ReactPortal
//   | null
//   | undefined
