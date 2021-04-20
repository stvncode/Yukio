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
import * as t from 'io-ts'
import { validateFields } from '../../../framework/form-validation'
import * as E from 'fp-ts/lib/Either'
import { NumberFromString } from 'io-ts-types/lib/NumberFromString'
import { fromEither } from 'fp-ts/lib/Option'

interface ProfileForm {
    firstName: string
    lastName: string
    email: string
    phone: number,
    age: number
    gender: string
    address: string
    city: string
    zipCode: number
    username: string
  }

  const FormFields = t.interface({
    firstName: t.string,
    lastName: t.string,
    email: t.string,
    phone: t.number,
    age: t.number,
    gender: t.string,
    address: t.string,
    city: t.string,
    zipCode: t.number,
    username: t.string,
  })
  
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
    const decorateE = form.getFieldDecorator('email', {
        initialValue: user?.email,
        rules: [{ required: true, message: msg.msgE }]
    })
    const decorateP = form.getFieldDecorator('phone', {
        rules: [{ required: true, message: msg.msgP}],
        initialValue: user?.phone
    })
    const decorateAge = form.getFieldDecorator('age', {
        initialValue: user?.age,
        rules: [{ required: true, message: msg.msgAge }]
    })
    const decorateG = form.getFieldDecorator('gender', {
        rules: [{ required: true, message: msg.msgG}],
        initialValue: user?.gender
    })
    const decorateAddress = form.getFieldDecorator('address', {
        initialValue: user?.address,
        rules: [{ required: true, message: msg.msgAddress }]
    })
    const decorateC = form.getFieldDecorator('city', {
        rules: [{ required: true, message: msg.msgC}],
        initialValue: user?.city
    })
    const decorateZ = form.getFieldDecorator('zipCode', {
        initialValue: user?.zipCode,
        rules: [{ required: true, message: msg.msgZ }]
    })
    const decorateU = form.getFieldDecorator('username', {
        initialValue: user.username,
        rules: [{ required: true, message: msg.msgU }]
    })

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        validateFields(FormFields)(form).map(E.map(formFields => {
            console.log(fromEither(NumberFromString.decode(formFields.age)))
        }))
        // form.validateFields(
        // (err: Record<keyof ProfileForm, unknown> | null, values: ProfileForm | undefined) => {
        //     console.log('values', values)
        //     // updateProfile(values)
        // }
        // )
    }

    return (
        <div className={css.container}>
            <div className={css.header}>
                <ArrowLeftOutlined className={css.arrow} onClick={() => window.history.back()} />
                <div className={css.title}>{msg.title}</div>
                <div></div>
            </div>
            <F onSubmit={handleSubmit}>
                <div className={css.form}>
                <FormItem label={msg.firstName} >
                    {decorateFN(<Input />)}
                </FormItem>
                <FormItem label={msg.lastName}>
                    {decorateLN(<Input />)}
                </FormItem>
                <FormItem label={msg.email}>
                    {decorateE(<Input />)}
                </FormItem>
                <FormItem label={msg.phone}>
                    {decorateP(<Input />)}
                </FormItem>
                <FormItem label={msg.age}>
                    {decorateAge(<Input />)}
                </FormItem>
                <FormItem label={msg.gender}>
                    {decorateG(<Input />)}
                </FormItem>
                <FormItem label={msg.address}>
                    {decorateAddress(<Input />)}
                </FormItem>
                <FormItem label={msg.city}>
                    {decorateC(<Input />)}
                </FormItem>
                <FormItem label={msg.zipCode}>
                    {decorateZ(<Input />)}
                </FormItem>
                <FormItem label={msg.username}>
                    <Input />
                </FormItem>
                </div>
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