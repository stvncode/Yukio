import React from 'react'
import { classNames } from './collapse.styles'
import { Collapse as AntCollapse } from 'antd'
import { CollapseProps } from 'antd/lib/collapse'

export const Collapse: React.FC<CollapseProps> = ({ children, ...props }) => (
  <AntCollapse className={classNames.container} {...props}>
    {children}
  </AntCollapse>
)
