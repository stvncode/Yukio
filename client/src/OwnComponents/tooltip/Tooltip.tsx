import React from 'react'
import { joinClasses } from '../../core/styles/classUtils'
import { rgba } from 'csx'
import { style } from 'typestyle'
import { Tooltip as AntTooltip } from 'antd'
import { TooltipProps as AntTooltipProps } from 'antd/lib/tooltip'

const COLOR = rgba(0, 0, 0, 0.75)
const overlayClass = style({
  $nest: {
    '.ant-tooltip-content .ant-tooltip-inner': {
      backgroundColor: COLOR.toString()
    },
    '.ant-tooltip-content .ant-tooltip-arrow': {
      borderTopColor: COLOR.toString(),
      borderLeftColor: COLOR.toString()
    }
  }
})

export const Tooltip: React.FC<TooltipProps> = ({ children, overlayClassName, ...props }) => (
  <AntTooltip {...props} overlayClassName={joinClasses(overlayClass, overlayClassName || '')}>
    {children}
  </AntTooltip>
)

export type TooltipProps = AntTooltipProps
