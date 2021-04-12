import React from 'react'
import { Button } from './Button'
import { ButtonProps, ButtonType } from 'antd/lib/button'
import { classNames } from './add-to-button.styles'
import { joinClasses } from '../../core/styles/classUtils'
import { Omit } from '../../prelude/fp/object'
interface AddToButtonProps extends Omit<ButtonProps, 'icon'> {
    icon?: React.ReactNode
    text?: string
    rightContent?: React.ReactNode
}

export const FatButton: React.FC<AddToButtonProps> = ({
    icon,
    type,
    text,
    className,
    rightContent,
    loading,
    ...props
}) => (
    <Button
        {...props}
        loading={loading}
        type={type || 'primary'}
        className={joinClasses(className || '', classNames.container)}
        size="large"
    >
        <div className={classNames.iconTextContainer}>
            {icon}
            <div className={classNames.addText}>{text}</div>
        </div>
        {!loading ? rightContent : <div></div>}
    </Button>
)
