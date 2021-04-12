import React from 'react'
import { Card } from 'antd'
import { CardMetaProps } from 'antd/lib/card'
import { classNames } from './meta.styles'
import { joinClasses } from '../../core/styles/classUtils'

type Props = CardMetaProps

export const Meta: React.FC<Props> = ({ className, ...props }) => (
  <Card.Meta className={joinClasses(classNames.container, className || '')} {...props} />
)
