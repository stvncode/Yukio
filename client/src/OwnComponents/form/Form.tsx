import React from 'react'
import { Form as AntForm } from '@ant-design/compatible'
import { FormProps } from '@ant-design/compatible/lib/form'
import { joinClasses } from '../../core/styles/classUtils'
import { stylesheet } from 'typestyle'

const css = stylesheet({
  container: {
    fontSize: '1.5rem'
  }
})

export const Form: React.FC<FormProps> = ({ children, className, ...props }) => (
  <AntForm className={joinClasses(className || '', css.container)} {...props}>
    {children}
  </AntForm>
)
