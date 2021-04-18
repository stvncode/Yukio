import React from 'react'
import { useTranslator } from '../../hooks/use-translator'
import { HelpMsg } from './help.msg'
import { css } from './help.styles'

export const Help: React.FC = () => {
    const msg = useTranslator(HelpMsg)
    return (
        <div>
            {msg.help}
        </div>
    )
}
