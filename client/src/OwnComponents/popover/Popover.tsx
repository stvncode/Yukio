import React from 'react'
import { Popover as AntPopover } from 'antd'
import { PopoverProps } from 'antd/lib/popover'

interface Props extends PopoverProps {
  containerClassName?: string
}

export const Popover: React.FC<Props> = ({ containerClassName, ...props }) => (
  <div className={containerClassName || ''} onClick={e => e.stopPropagation()}>
    <AntPopover {...props} />
  </div>
)
