import React from 'react'
import { css } from './navbar.style'
import { Link } from 'react-router-dom'

export const Navbar: React.FC = () => {
    return (
        <div className={css.container} >
            <div className={css.navbar}>
                <Link to='/' className={css.link}>Home</Link>
                <Link to='login' className={css.link}>Login</Link>
            </div>
        </div>
    )
}
