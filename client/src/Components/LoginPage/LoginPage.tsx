import React from 'react'
import googleImage from '../../assets/googleImage.png'
import githubImage from '../../assets/githubImage.png'
import twitterImage from '../../assets/twitterImage.png'
import { css } from './login.style'

export const LoginPage: React.FC = () => {

    const googleLogin = () => {
        window.open("http://localhost:4000/auth/google", "_self")
    }

    const githubLogin = () => {
        // window.open("http://localhost:4000/auth/google", "_self")
    }

    const twitterLogin = () => {
        // window.open("http://localhost:4000/auth/google", "_self")
    }

    return (
        <div className={css.loginPage}>
            <div className={css.loginForm}>
                <h1>Login</h1>
                <div className={css.googleContainer} onClick={googleLogin}>
                    <img src={googleImage} alt="Google Icon" className={css.img} />
                    <div className={css.text}>Login With Google</div>
                </div>
                <div className={`${css.googleContainer} ${css.githubContainer}`} onClick={githubLogin}>
                    <img src={githubImage} alt="Github Icon" className={css.img} />
                    <div className={css.text}>Login With Github</div>
                </div>
                <div className={`${css.googleContainer} ${css.twitterContainer}`} onClick={twitterLogin}>
                    <img src={twitterImage} alt="Github Icon" className={css.img} />
                    <div className={css.text}>Login With Twitter</div>
                </div>
            </div>
        </div>
    )
}
