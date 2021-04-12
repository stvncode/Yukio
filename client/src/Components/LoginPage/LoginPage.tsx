import React from 'react'
import { css } from './login.style'
import { useTranslator } from '../../hooks/use-translator'
import { LoginMsg } from './login.msg'
import { InstagramOutlined, GithubOutlined, GoogleOutlined, TwitterOutlined, FacebookOutlined } from '@ant-design/icons';
import { TextButton } from '../../OwnComponents/button/Button'
import { facebookLogin, githubLogin, googleLogin, twitterLogin } from '../../api/auth';

export const LoginPage: React.FC = () => {

    const msg = useTranslator(LoginMsg)

    return (
        <div className={css.loginPage}>
            <div className={css.loginForm}>
                <h1>{msg.login}</h1>
                <TextButton icon={<GoogleOutlined className={css.logo} />} className={`${css.newContainer}`} onClick={googleLogin}>
                    {msg.google}
                </TextButton>
                <TextButton icon={<GithubOutlined className={css.logo} />} className={`${css.newContainer} ${css.githubContainer}`} onClick={githubLogin}>
                    {msg.github}
                </TextButton>
                <TextButton icon={<TwitterOutlined className={css.logo} />} className={`${css.newContainer} ${css.twitterContainer}`} onClick={twitterLogin}>
                    {msg.twitter}
                </TextButton>
                <TextButton icon={<FacebookOutlined className={css.logo} />} className={`${css.newContainer} ${css.facebookContainer}`} onClick={facebookLogin}>
                    {msg.facebook}
                </TextButton>
                <TextButton icon={<InstagramOutlined className={css.logo} />} className={`${css.newContainer} ${css.instagramContainer}`}>
                    {msg.instagram}
                </TextButton>
            </div>
        </div >
    )
}
