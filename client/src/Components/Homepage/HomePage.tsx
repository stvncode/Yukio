import React, { useContext } from 'react'
import { myContext } from '../../Context/UserContext'
import { IUser } from '../../types/maintypes'

export const HomePage: React.FC = () => {
    const user = useContext(myContext) as IUser
    console.log(user)
    return (
        <div>
            {
                user ? (
                    <h1>Welcome back {user.username} </h1>
                ) : <h1>Welcome to my website</h1>
            }
        </div >
    )
}
