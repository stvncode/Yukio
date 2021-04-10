import React from 'react'
import googleImage from '../../assets/google.png'
import githubImage from '../../assets/github.png'
import twitterImage from '../../assets/twitter.png'
import { css } from './login.style'

export const LoginPage: React.FC = () => {

    const googleLogin = () => {
        window.open("http://localhost:4000/auth/google", "_self")
    }

    const githubLogin = () => {
        // window.open("http://localhost:4000/auth/google", "_self")
    }

    const twitterLogin = () => {
        // window.location.href = "http://localhost:4000/auth/twitter"
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
                    <img src={twitterImage} alt="Github Icon" className={css.twitterImg} />
                    <div className={css.twitterText}>Login With Twitter</div>
                </div>
            </div>
        </div>
    )
}
