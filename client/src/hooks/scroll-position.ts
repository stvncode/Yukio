import { useLayoutEffect, useRef } from 'react'

const isBrowser = typeof window !== `undefined`

interface ScrollPosParams {
    element?: React.RefObject<HTMLDivElement>
    useWindow: boolean
}

const getScrollPosition = ({ element, useWindow }: ScrollPosParams) => {
    if (!isBrowser) {
        return { x: 0, y: 0 }
    }

    const target = element && element.current ? element.current : document.body
    const position = target.getBoundingClientRect()
    return useWindow
        ? { x: window.scrollX, y: window.scrollY }
        : { x: position.left, y: position.top }
}

interface PositionDiff {
    prevPos: { x: number; y: number }
    currPos: { x: number; y: number }
}

export const useScrollPosition = (
    effect: (diff: PositionDiff) => void,
    deps: any[],
    parent: React.RefObject<HTMLDivElement>,
    element: React.RefObject<HTMLDivElement>,
    useWindow: boolean,
    wait: number
) => {
    const position = useRef(getScrollPosition({ useWindow }))

    let throttleTimeout: NodeJS.Timeout | null = null

    const callBack = () => {
        const currPos = getScrollPosition({ element, useWindow })
        effect({ prevPos: position.current, currPos })
        position.current = currPos
        throttleTimeout = null
    }

    useLayoutEffect(() => {
        if (!isBrowser) {
            return
        }

        const handleScroll = () => {
            if (wait) {
                if (throttleTimeout === null) {
                    throttleTimeout = setTimeout(callBack, wait)
                }
            } else {
                callBack()
            }
        }
        // deps trigger
        handleScroll()

        // event subscriptions
        window.addEventListener('resize', handleScroll)
        parent && parent.current !== null && parent.current.addEventListener
            ? parent.current.addEventListener('scroll', handleScroll)
            : window.addEventListener('scroll', handleScroll)

        // unsubscribe
        return () => {
            window.addEventListener('resize', handleScroll)

            parent && parent.current !== null && parent.current.removeEventListener
                ? parent.current.removeEventListener('scroll', handleScroll)
                : window.removeEventListener('scroll', handleScroll)
        }
    }, deps)
}