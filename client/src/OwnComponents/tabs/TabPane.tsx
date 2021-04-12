import React from 'react'
import { classNames } from './tabs.styles'
import { joinClasses } from '../../core/styles/classUtils'
import { TabPaneProps } from 'antd/lib/tabs'
import { Tabs } from 'antd'
export const TabPane: React.FC<TabPaneProps> = ({ className, ...rest }) => (
  <Tabs.TabPane className={joinClasses(classNames.pane, className || '')} {...rest} />
)
