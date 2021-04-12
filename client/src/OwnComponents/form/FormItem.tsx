import Form, { FormItemProps } from '@ant-design/compatible/lib/form'
import React from 'react'
import { classNames } from './form-item.styles'
import { joinClasses } from '../../core/styles/classUtils'

export const FormItem = (
  props: FormItemProps & { children: React.ReactNode; fullWidth?: boolean }
) => (
  <Form.Item
    {...props}
    className={
      props.className !== undefined
        ? joinClasses(classNames.container, props.className || '', 'full-width')
        : joinClasses(classNames.container, 'full-width')
    }
  >
    {props.children}
  </Form.Item>
)

export type ValidateStatuses = FormItemProps['validateStatus']
