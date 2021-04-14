import React, {useState} from 'react'
import { Input } from 'antd'
import { Button } from '../../OwnComponents/button/Button'
import { createFood } from '../../api/food'
import { useTranslator } from '../../hooks/use-translator'
import { AdminMsg } from './admin.msg'
import {css} from './admin.styles'
import axios from 'axios'


export const AdminPage: React.FC = () => {
    const [data, setData] = useState('')
    const msg = useTranslator(AdminMsg)

    return (
        <div className={css.container}>
            <Input onChange={e => setData(e.target.value)} name="types" value={data} className={css.input}></Input>
            <Button onClick={() => createFood(data)} className={css.button}>{msg.add}</Button>
        </div>
    )
}
