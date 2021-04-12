import React from 'react'
import { Alert } from 'antd'
import { AlertProps } from 'antd/lib/alert'
import { CheckCircleOutlined, ExclamationCircleOutlined, InfoCircleOutlined, QuestionCircleOutlined, WarningOutlined } from '@ant-design/icons'
import { classNames } from './banner.styles'
import { joinClasses } from '../../core/styles/classUtils'

export const Banner: React.FC<AlertProps & { actions?: React.ReactNode[] }> = ({
  message,
  className,
  actions,
  type,
  ...props
}) => {
  const getIconComp = () => {
    switch (type) {
      case 'error':
        return WarningOutlined
      case 'warning':
        return ExclamationCircleOutlined
      case 'info':
        return InfoCircleOutlined
      case 'success':
        return CheckCircleOutlined
      default:
        return QuestionCircleOutlined
    }
  }

  const IconComp = getIconComp()

  return (
    <Alert
      {...props}
      className={joinClasses(classNames.container, className || '', type || '')}
      icon={<IconComp className={classNames.icon} />}
      banner
      message={
        <div>
          {message}
          {actions !== undefined && (
            <div className={classNames.actionsContainer}>
              {actions.map((a, index) => (
                <div key={index}>{a}</div>
              ))}
            </div>
          )}
        </div>
      }
    />
  )
}
