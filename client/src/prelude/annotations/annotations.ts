export const createAnnotator = <Tag = string>() => {
    const annotation = Symbol()

    const setAnnotation = <T extends object>(X: T, name: Tag): void => {
        ; (X as any)[annotation] = name
    }

    const withAnnotation = <T extends object>(X: T, name: Tag): T =>
        Object.assign(Object.create(Object.getPrototypeOf(X)), { ...X, [annotation]: name })

    const getAnnotation = <T extends object>(X: T): Tag | undefined => (X as any)[annotation]

    return {
        withAnnotation,
        setAnnotation,
        getAnnotation
    }
}