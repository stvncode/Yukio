import React from 'react'
import { css } from './navbar.style'
import { Link } from 'react-router-dom'
import axios, { AxiosResponse } from 'axios'

export const Navbar: React.FC = () => {
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
                <Link to='login' className={css.link}>Login</Link>
                <div style={{ cursor: 'pointer' }} onClick={logout}>Logout</div>
            </div>
        </div>
    )
}
