import React from 'react'
import googleImage from '../../assets/google.png'
import githubImage from '../../assets/github.png'
import twitterImage from '../../assets/twitter.png'
import facebookImage from '../../assets/fb.png'
import instagramImage from '../../assets/insta.png'
import { css } from './login.style'
import { useTranslator } from '../../hooks/use-translator'
import { LoginMsg } from './login.msg'

export const LoginPage: React.FC = () => {

    const msg = useTranslator(LoginMsg)

    const googleLogin = () => {
        window.open("http://localhost:4000/auth/google", "_self")
    }

    const githubLogin = () => {
        window.open("http://localhost:4000/auth/github", "_self")
    }

    const facebookLogin = () => {
        window.open("http://localhost:4000/auth/facebook", "_self")
    }

    // const instagramLogin = () => {
    //     window.open("http://localhost:4000/auth/instagram", "_self")
    // }

    const twitterLogin = () => {
        window.location.href = "http://localhost:4000/auth/twitter"
    }

    return (
        <div className={css.loginPage}>
            <div className={css.loginForm}>
                <h1>{msg.login}</h1>
                <div className={css.googleContainer} onClick={googleLogin}>
                    <img src={googleImage} alt="Google Icon" className={css.img} />
                    <div className={css.text}>{msg.google}</div>
                </div>
                <div className={`${css.googleContainer} ${css.githubContainer}`} onClick={githubLogin}>
                    <img src={githubImage} alt="Github Icon" className={css.img} />
                    <div className={css.text}>{msg.github}</div>
                </div>
                <div className={`${css.googleContainer} ${css.twitterContainer}`} onClick={twitterLogin}>
                    <img src={twitterImage} alt="Github Icon" className={css.twitterImg} />
                    <div className={css.twitterText}>{msg.twitter}</div>
                </div>
                <div className={`${css.googleContainer} ${css.facebookContainer}`} onClick={facebookLogin}>
                    <img src={facebookImage} alt="Github Icon" className={css.facebookImg} />
                    <div className={css.facebookText}>{msg.facebook}</div>
                </div>
                <div className={`${css.googleContainer} ${css.instagramContainer}`}>
                    <img src={instagramImage} alt="Github Icon" className={css.img} />
                    <div className={css.instagramText}>{msg.instagram}</div>
                </div>
            </div>
        </div>
    )
}
