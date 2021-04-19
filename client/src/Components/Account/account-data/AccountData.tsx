import React, { useContext } from 'react'
import { useTranslator } from '../../../hooks/use-translator'
import { AccountDataMsg } from './account-data.msg'
import { css } from './account-data.styles'
import { ArrowLeftOutlined } from '@ant-design/icons'
import { Input } from 'antd'
import { Button } from '../../../OwnComponents/button/Button'
import { updateProfile } from '../../../api/profile'
import { Form as F } from '../../../OwnComponents/form/Form'
import { FormItem } from '../../../OwnComponents/form/FormItem'
import { FormComponentProps } from '@ant-design/compatible/lib/form'
import Form from '@ant-design/compatible/lib/form/Form'
import { myContext } from '../../../Context/UserContext'
import { IUser } from '../../../types/maintypes'

interface ProfileForm {
    firstName: string
    lastName: string
    email: string
    phone: number
    age: number
    gender: string
    address: string
    city: string
    zipCode: number
  }
  
  type Props = FormComponentProps<ProfileForm>

const AccountData_: React.FC<Props> = ({form}) => {
    const msg = useTranslator(AccountDataMsg)
    const user = useContext(myContext) as IUser

    const decorateFN = form.getFieldDecorator('firstName', {
        initialValue: user?.firstName,
        rules: [{ required: true, message: msg.msgFN }]
    })
    const decorateLN = form.getFieldDecorator('lastName', {
        rules: [{ required: true, message: msg.msgLN}],
        initialValue: user?.lastName
    })
    // const decorateE = form.getFieldDecorator('email', {
    //     initialValue: 'lol',
    //     rules: [{ required: true, message: 'nope' }]
    // })
    // const decorateP = form.getFieldDecorator('phone', {
    //     rules: [{ required: true, message: 'nope2'}],
    //     initialValue: 'doubleLol'
    // })
    // const decorateAge = form.getFieldDecorator('age', {
    //     initialValue: 'lol',
    //     rules: [{ required: true, message: 'nope' }]
    // })
    // const decorateG = form.getFieldDecorator('gender', {
    //     rules: [{ required: true, message: 'nope2'}],
    //     initialValue: 'doubleLol'
    // })
    // const decorateAddress = form.getFieldDecorator('address', {
    //     initialValue: 'lol',
    //     rules: [{ required: true, message: 'nope' }]
    // })
    // const decorateC = form.getFieldDecorator('city', {
    //     rules: [{ required: true, message: 'nope2'}],
    //     initialValue: 'doubleLol'
    // })
    // const decorateZ = form.getFieldDecorator('zipCode', {
    //     initialValue: 'lol',
    //     rules: [{ required: true, message: 'nope' }]
    // })

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        form.validateFields(
        (err: Record<keyof ProfileForm, unknown> | null, values: ProfileForm | undefined) => {
            console.log('values', values)
            // updateProfile(values)
        }
        )
    }

    return (
        <div className={css.container}>
            <div className={css.header}>
                <ArrowLeftOutlined className={css.arrow} onClick={() => window.history.back()} />
                <div className={css.title}>{msg.title}</div>
                <div></div>
            </div>
            <F onSubmit={handleSubmit}>
                <FormItem label={msg.firstName}>
                    {decorateFN(<Input />)}
                </FormItem>
                <FormItem label={msg.lastName}>
                    {decorateLN(<Input />)}
                </FormItem>
                {/* <FormItem label='yo2'>
                    <Input />
                </FormItem>
                <FormItem label='yo3'>
                    <Input />
                </FormItem>
                <FormItem label='yo4'>
                    <Input />
                </FormItem> */}
                <FormItem>
                <Button  htmlType="submit" >
                    {msg.submit}
                </Button>
                </FormItem>
            </F>
        </div>
    )
}

export const AccountData = Form.create()(AccountData_)