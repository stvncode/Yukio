import { runEffect } from "../fp/function";

export const log = (message: string) => <A>(a: A): A =>
  runEffect<A>(a => console.log(message, a))(a)

  export const makeLogger = (condition: boolean) => (prefix: string, localCondition?: boolean) => (
    ...args: any[]
  ) => {
    if (condition || localCondition !== false) {
      console.log(`[${prefix}]`, ...args)
    }
  }