import React from 'react'
import { color } from 'csx'
import { ExclamationCircleFilled, InfoCircleFilled, WarningFilled } from '@ant-design/icons'
import { joinClasses } from '../../core/styles/classUtils'
import { palette } from '../../core/styles/palette'
import { useTranslator } from '../../hooks/use-translator'
import { folderPrimitive } from '../../prelude/fp/fold'
import { css } from './string-alert.styles'
import { typeMsg } from './alert.msg'

type Type = 'warning' | 'info' | 'error'

interface Props {
    type: Type
    label: React.ReactNode
}

export const folderType = folderPrimitive<Type>()

export const StringAlert: React.FC<Props> = ({ label, type }) => (
    <span className={css.alertContainer}>
        <AlertIcon className={css.spacedIcon} type={type} />
        <span className={css.alertLabel}>{label}</span>
    </span>
)


export const AlertIcon: React.FC<{
    type: Type
    iconClassName?: string
    wide?: boolean
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>> = ({
    type,
    iconClassName,
    wide,
    ...rest
}) => {
        const msg = useTranslator(typeMsg)
        const mainColor = folderType({
            warning: color(palette.orange).toHexString(),
            error: color(palette.red).toHexString(),
            info: color(palette.blue).toHexString()
        })(type)
        const IconComp = folderType({
            warning: ExclamationCircleFilled,
            info: InfoCircleFilled,
            error: WarningFilled
        })(type)
        return (
            <span {...rest} className={joinClasses(css.container, type)}>
                {wide === true && <span className={joinClasses(css.label, type)}>{msg.typeLabel(type)}</span>}
                <IconComp
                    className={iconClassName}
                    style={{
                        color: mainColor,
                        fontSize: '2rem'
                    }}
                />
            </span>
        )
    }