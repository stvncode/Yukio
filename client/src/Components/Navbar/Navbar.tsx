import React from 'react'
import { css } from './navbar.style'
import { Link } from 'react-router-dom'

export const Navbar: React.FC = () => {
    return (
        <div className={css.container} >
            <Link to='/'>Home</Link>
            <Link to='login'>Login</Link>
        </div>
    )
}
