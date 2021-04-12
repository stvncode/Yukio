import React from 'react'
import { classNames } from './tabs.styles'
import { joinClasses } from '../../core/styles/classUtils'
import { Tabs as AntTabs } from 'antd'
import { TabsProps } from 'antd/lib/tabs'

interface Props extends TabsProps {
  noMargin?: boolean
  align?: 'center' | 'left' | 'right'
}
export const Tabs: React.FC<Props> = ({
  children,
  tabBarStyle,
  noMargin,
  align,
  className,
  ...rest
}) => (
  <AntTabs
    {...rest}
    tabBarStyle={{
      ...tabBarStyle,
      textAlign: align === undefined ? 'center' : align,
      ...(noMargin && { margin: 0 })
    }}
    className={joinClasses(classNames.tabs, className || '')}
  >
    {children}
  </AntTabs>
)
