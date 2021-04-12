import React, { useContext, useState } from 'react'
import { myContext } from '../../Context/UserContext'
import { useTranslator } from '../../hooks/use-translator'
import { useMemoDispatch } from '../../hooks/useMemoDispatch'
import { YukioActions } from '../../store/yukio.actions'
import { IUser } from '../../types/maintypes'
import { HomeMsg } from './home.msg'
import { useSelector } from 'react-redux'
import { yukioSelector } from '../../selectors/selectors'
import { Button } from '../../OwnComponents/button/Button'
import { LoginPage } from '../LoginPage/LoginPage'
import { Modal } from '../../OwnComponents/modal/Modal'

export const HomePage: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false)

    const user = useContext(myContext) as IUser
    const msg = useTranslator(HomeMsg)
    const isShow = useSelector(yukioSelector.get)

    const dispatchShowButton = useMemoDispatch(YukioActions.make({ type: 'ShowButton' }))

    return (
        <>
            <div>
                {
                    user ? (
                        <h1>{msg.welcomeBack} {user.username}</h1>
                    ) : <h1>{msg.welcome}</h1>
                }
            </div>
            <Button onClick={() => setIsOpen(true)}>Try to open modal when sign in</Button>
            <Modal destroyOnClose visible={isOpen} onCancel={() => setIsOpen(false)}>coucou</Modal>
        </>
    )
}
