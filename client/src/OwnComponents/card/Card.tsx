import React from 'react'
import { Card as AntCard } from 'antd'
import { CardProps } from 'antd/lib/card'
import { classNames } from './card.styles'
import { joinClasses, toggleClass } from '../../core/styles/classUtils'

interface ExtendedCardProps extends CardProps {
  disabled?: boolean
}
export const Card = ({
  bodyStyle,
  className,
  disabled,
  onClick,
  hoverable,
  ...props
}: ExtendedCardProps) => (
  <AntCard
    {...props}
    className={joinClasses(
      className !== undefined ? className : '',
      classNames.card,
      toggleClass(disabled === true, 'disabled')
    )}
    bodyStyle={{ padding: '2rem', ...bodyStyle }}
    onClick={disabled === true ? undefined : onClick}
    hoverable={disabled === true ? false : hoverable}
  />
)
