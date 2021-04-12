import React from 'react'
import { classNames } from './modal.styles'
import { joinClasses } from '../../core/styles/classUtils'
import { Modal as AntModal } from 'antd'
import { ModalProps } from 'antd/lib/modal'

export const Modal: React.FC<ModalProps> = ({ children, className, ...props }) => (
  <AntModal {...props} className={joinClasses(classNames.container, className || '')}>
    {children}
  </AntModal>
)
