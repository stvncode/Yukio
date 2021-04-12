import React from 'react'
import ReactSimpleBar from 'simplebar-react'
import { stylesheet } from 'typestyle'
import { joinClasses } from '../../core/styles/classUtils'

interface Props {
  forceVisible?: true | 'x' | 'y'
  direction?: 'rtl' | 'ltr'
  classNames?: {
    content: string
    scrollContent: string
    scrollbar: string
    track: string
  }
  scrollBarMinSize?: number
  autoHide?: boolean
  scrollableNodeProps?: object
  children: React.ReactNode | React.ReactNode[] | string
  className?: string
  ref?: React.Ref<ReactSimpleBar>
  fullHeight?: boolean
}

const css = stylesheet({
  container: {
    $nest: {
      '.simplebar-track.simplebar-vertical .simplebar-scrollbar:before': {
        background: '#dadada'
      },
      '.simplebar-track.simplebar-horizontal .simplebar-scrollbar:before': {
        background: '#dadada'
      }
    }
  },
  fullHeight: {
    $nest: {
      '.simplebar-content': {
        width: '100%',
        height: '100%'
      }
    }
  }
})

export const ScrollBar: React.FC<Props> = React.forwardRef((props, ref) => {
  const { children, className, fullHeight, ...rest } = props
  const newClassName = joinClasses(className || '', css.container, fullHeight ? css.fullHeight : '')
  return (
    <ReactSimpleBar ref={ref} {...rest} className={newClassName}>
      {children}
    </ReactSimpleBar>
  )
})
