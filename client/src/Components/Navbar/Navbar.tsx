import React, { useContext } from 'react'
import { css } from './navbar.style'
import { Link } from 'react-router-dom'
import axios, { AxiosResponse } from 'axios'
import { myContext } from '../../Context/UserContext'
import { IUser } from '../../types/maintypes'
import { useTranslator } from '../../hooks/use-translator'
import { NavbarMsg } from './navbar.msg'

export const Navbar: React.FC = () => {

    const user = useContext(myContext) as IUser
    const msg = useTranslator(NavbarMsg)

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
                <Link to='/' className={css.link}>{msg.home}</Link>
                {user ? <div className={css.menu} onClick={logout}>{msg.logout}</div> : <Link to='login' className={css.link}>{msg.login}</Link>}
            </div>
        </div>
    )
}
