import React, { useContext } from 'react'
import { css } from './navbar.style'
import { Link } from 'react-router-dom'
import axios, { AxiosResponse } from 'axios'
import { myContext } from '../../Context/UserContext'
import { IUser } from '../../types/maintypes'

export const Navbar: React.FC = () => {

    const user = useContext(myContext) as IUser

    const logout = () => {
        axios.get('http://localhost:4000/auth/logout', { withCredentials: true }).then((res: AxiosResponse) => {
            if (res.data === 'done') {
                window.location.href = '/'
            }
        })
    }

    return (
        <div className={css.container} >
            <div className={css.navbar}>
                <Link to='/' className={css.link}>Home</Link>
                {user ? <div style={{ cursor: 'pointer' }} onClick={logout}>Logout</div> : <Link to='login' className={css.link}>Login</Link>}
            </div>
        </div>
    )
}
