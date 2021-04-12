import React from 'react'
import { classNames } from './form-section.styles'
import { CloseOutlined } from '@ant-design/icons'
import { joinClasses, toggleClass } from '../../core/styles/classUtils'

interface Props {
  content?: string | React.ReactNode
  title?: string | React.ReactNode
  onClose?: () => void
  isClosable?: boolean
}

export const SectionPanel: React.FC<Props> = ({ content, title, onClose, isClosable }) => (
  <div className={classNames.container}>
    <div className={classNames.titleContainer}>
      {title}
      {onClose !== undefined && (
        <div
          className={joinClasses(
            classNames.removeButton,
            toggleClass(isClosable === true, 'visible')
          )}
          onClick={_ => onClose && onClose()}
        >
          <CloseOutlined />
        </div>
      )}
    </div>
    <div className={classNames.contentContainer}>{content}</div>
  </div>
)
