import React from 'react'
import { useTranslator } from '../../hooks/use-translator'
import { AdminMsg } from './admin.msg'
import { css } from './admin.styles'

export const AdminPage: React.FC = () => {
  const msg = useTranslator(AdminMsg)

  return (
    <div className={css.container}>
      {msg.admin}
    </div>
  )
}
