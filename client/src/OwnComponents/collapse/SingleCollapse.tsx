import React from 'react'
import { classNames } from './single-collapse.styles'
import { Collapse } from './Collapse'
import { CollapseProps } from 'antd/lib/collapse'
import { joinClasses } from '../../core/styles/classUtils'
import { Panel } from './Panel'
type Props = CollapseProps & {
  children?: React.ReactNode[] | React.ReactNode
  header?: React.ReactNode
}

export const SingleCollapse: React.FC<Props> = props => (
  <Collapse
    {...props}
    bordered={false}
    className={joinClasses(classNames.collapse, props.className || '')}
  >
    <Panel
      className={classNames.panel}
      key="panel"
      header={
        <div className={classNames.innerDiv}>
          <div className={classNames.clickableHeader}>{props.header}</div>
        </div>
      }
      showArrow={false}
    >
      {props.children}
    </Panel>
  </Collapse>
)
