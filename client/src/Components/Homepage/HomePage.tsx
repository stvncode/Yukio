import React, { useContext } from 'react'
import { myContext } from '../../Context/UserContext'
import { useTranslator } from '../../hooks/use-translator'
import { useMemoDispatch } from '../../hooks/useMemoDispatch'
import { YukioActions } from '../../store/yukio.actions'
import { IUser } from '../../types/maintypes'
import { HomeMsg } from './home.msg'

export const HomePage: React.FC = () => {
    const user = useContext(myContext) as IUser
    const msg = useTranslator(HomeMsg)

    const dispatchShowButton = useMemoDispatch(YukioActions.make({type: 'ShowButton'}))
    void dispatchShowButton
    return (
        <div>
            {
                user ? (
                    <h1>{msg.welcomeBack} {user.username}</h1>
                ) : <h1>{msg.welcome}</h1>
            }
        </div >
    )
}
