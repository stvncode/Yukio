import React, { ReactNode } from 'react'
import { Checkbox } from 'antd'
import { CheckboxGroupProps } from 'antd/lib/checkbox'
import { classNames } from './checkbox-group.styles'
import { joinClasses } from '../../core/styles/classUtils'
export class CheckboxGroup extends React.PureComponent<
  CheckboxGroupProps & { children?: ReactNode | ReactNode[] }
> {
  render() {
    const { className, children, ...rest } = this.props

    return (
      <Checkbox.Group {...rest} className={joinClasses(classNames.container, className || '')}>
        {children}
      </Checkbox.Group>
    )
  }
}
