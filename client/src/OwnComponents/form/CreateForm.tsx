import * as React from 'react'
import Form from '@ant-design/compatible/lib/form/Form'
import { FormComponentProps } from '@ant-design/compatible/lib/form/Form'

export const createForm = <P extends object>(
  WrappedComponent: React.ComponentType<P & FormComponentProps<any>>
) => (Form.create()(WrappedComponent as any) as unknown) as React.ComponentType<P>