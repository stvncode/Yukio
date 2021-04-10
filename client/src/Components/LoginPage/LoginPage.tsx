import React from 'react'
import googleImage from '../../assets/googleImage.png'
import { css } from './login.style'

export const LoginPage: React.FC = () => {

    return (
        <div className={css.loginPage}>
            <div className={css.loginForm}>
                <h1>Login</h1>
                <div className={css.googleContainer}>
                    <img src={googleImage} alt="Google Icon" className={css.img} />
                    <div>Login With Google</div>
                </div>
                {/* <div className={`${css.googleContainer} ${css.githubContainer}`} onClick={githubLogin}>
                    <img src={githubImage} alt="Github Icon" />
                    <p>Login With Github</p>
                </div>

                <div className={`${css.googleContainer} ${css.twitterContainer}`} onClick={twitterLogin}>
                    <img src={twitterImage} alt="Twitter Icon" />
                    <p>Login With Twitter</p>
                </div> */}
            </div>
        </div>
    )
}
