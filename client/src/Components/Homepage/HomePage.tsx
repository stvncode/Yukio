import axios from 'axios'
import React, { useContext, useState } from 'react'
import { myContext } from '../../Context/UserContext'
import { useTranslator } from '../../hooks/use-translator'
import { Button } from '../../OwnComponents/button/Button'
import { IFood, IUser } from '../../types/maintypes'
import { HomeMsg } from './home.msg'

export const HomePage: React.FC = () => {

    const user = useContext(myContext) as IUser
    const msg = useTranslator(HomeMsg)

    const [types, setTypes] = useState([])

    const foodTypes = () => {
        axios.get('http://localhost:4000/getAllFoodTypes').then(res => {
            setTypes(res.data)
        })
    }
    console.log(types)

    return (
        <>
            <div>
                {
                    user ? (
                        <h1>{msg.welcomeBack} {user.username}</h1>
                    ) : <h1>{msg.welcome}</h1>
                }
            </div>
            <Button onClick={foodTypes}>Get food</Button>
            <div>
                {types.map((t: IFood) => 
                    <div>{t.types}</div>
                )}
            </div>
        </>
    )
}
