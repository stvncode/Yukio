// let prefix = ''
// const logEnd = (_m: string) => {
//   console.log(prefix + _m)
//   prefix = prefix.substring(2)
// }

interface Tracer {
    exist(x: any): boolean
    tracking<T>(x: any, next: () => T): T
}

export class ArrayTracer implements Tracer {
    cursorIndex = 0
    cursors: any[]
    constructor(size: number) {
        this.cursors = new Array(size)
    }
    tracking<T>(x: T, next: () => T): T {
        if (this.exist(x)) {
            return x
        } else {
            this.push(x)
            const res = next()
            this.pop()
            return res
        }
    }

    push(x: any): void {
        if (this.cursorIndex < this.cursors.length) {
            this.cursors[this.cursorIndex] = x
        } else {
            this.cursors.push(x)
        }
        this.cursorIndex++
    }
    exist(x: any): boolean {
        for (let i = 0; i < this.cursorIndex; i++) {
            if (this.cursors[i] === x) {
                return true
            }
        }
        return false
    }
    pop(): void {
        this.cursors[this.cursorIndex] = null // GC friendly
        this.cursorIndex--
    }
}

export class SetTracer implements Tracer {
    objs: Set<any>
    constructor() {
        this.objs = new Set()
    }
    tracking<T>(x: T, next: () => T): T {
        if (this.exist(x)) {
            return x
        } else {
            this.push(x)
            const res = next()
            this.pop(x)
            return res
        }
    }

    push(x: any): void {
        this.objs.add(x)
    }
    exist(x: any): boolean {
        return this.objs.has(x)
    }
    pop(x: any): void {
        this.objs.delete(x)
    }
}

// tslint:disable-next-line: cyclomatic-complexity
const recycleRec = <T>(o: unknown, n: T, tracer: Tracer): T => {
    // console.log(prefix, 'recycle ', typeof n, n)
    // prefix += '  '
    // tslint:disable-next-line: prefer-switch
    if (n === null || n === undefined) {
        return n
    }

    if (o === n) {
        // logEnd('SAME REF, RETURN O')
        return o as T
    } else {
        // tslint:disable-next-line: prefer-switch
        if (o === undefined || o === null) {
            return n
        }
        const typeOfN = typeof n
        // console.log(prefix, typeOfN, typeOfN, n)
        if (typeOfN !== typeof o) {
            // logEnd('NOT SAME TYPE, RETURN N')
            return n
        } else {
            if (typeOfN === 'object') {
                if (Array.isArray(n)) {
                    if (Array.isArray(o)) {
                        const nLen = n.length
                        const isDiff = o.length !== nLen
                        let res: any = isDiff ? [] : null
                        for (let i = 0; i < nLen; i++) {
                            const ov = (o as any)[i]
                            const ni = n[i]
                            const v = tracer.tracking(ni, () => recycleRec(ov, ni, tracer))
                            if (res !== null) {
                                res.push(v)
                            } else if (v !== ov) {
                                res = n.slice(0, i)
                                res.push(v)
                            }
                        }
                        return res !== null ? res : ((o as any) as T)
                    } else {
                        return n
                    }
                } else {
                    if (n instanceof Set || n instanceof Map) {
                        return n
                    } else {
                        const nKeys = Object.keys(n)
                        const nProto = Object.getPrototypeOf(n)
                        const oProto = Object.getPrototypeOf(n)
                        const isDiff = oProto !== nProto || Object.keys(o as object).length !== nKeys.length // false
                        let res: any = isDiff ? Object.create(nProto) : null // clone the class - if any
                        for (const nk of nKeys) {
                            const ov = (o as any)[nk]
                            const ni = (n as any)[nk]
                            const v = tracer.tracking(ni, () => recycleRec(ov, ni, tracer))
                            if (res !== null) {
                                res[nk] = v
                            } else if (v !== ov) {
                                res = Object.create(nProto) // clone the class - if any
                                for (const k of nKeys) {
                                    if (k === nk) {
                                        break
                                    }
                                    res[k] = (o as any)[k]
                                }
                                res[nk] = v
                            }
                        }
                        return res !== null ? res : (o as T)
                    }
                }
            }
            // logEnd(`DEFAULT FALLBACK RETURN N ${typeOfN}`)
            // console.log(prefix, 'default eval.. ', typeOfN, n)
            return n
            // if (typeOfN === 'function') {
            //   // logEnd(`DEFAULT RETURN N ${Function.prototype.toString.call(n)}`)
            //   return n
            // } else {
            //   // logEnd(`DEFAULT FALLBACK RETURN N ${typeOfN}`)
            //   return n
            // }
        }
    }
}

// export const recycle: <T>(o: unknown, n: T) => T = (o, n) => recycleRec(o, n, new ArrayTracer(100))
export const recycle: <T>(o: unknown, n: T) => T = (o, n) => recycleRec(o, n, new SetTracer())