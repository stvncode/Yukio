import React, { useContext } from 'react'
import { useTranslator } from '../../hooks/use-translator'
import { AccountMsg } from './account.msg'
import { css } from './account.styles'
import { myContext } from '../../Context/UserContext'
import { IUser } from '../../types/maintypes'
import { UserOutlined, IdcardOutlined, NotificationTwoTone, GiftOutlined } from '@ant-design/icons'
import { Col, Row } from 'antd'
import { FaCookieBite } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { joinClasses } from '../../core/styles/classUtils'

export const Account: React.FC = () => {
    const msg = useTranslator(AccountMsg)

    const user = useContext(myContext) as IUser

    return (
        <div className={css.container}>
            <div><UserOutlined className={css.icon} /></div>
            <div className={css.hello}>{msg.hello(user.username)}</div>
            <div>{msg.space}</div>
            <Row gutter={[16, 16]} className={css.row} justify='center'>
                    <Col span={8} className={css.col}>
                        <Link to='account/data' className={css.link}> 
                            <div className={joinClasses(css.leftContainer, css.leftColor1)}><IdcardOutlined /></div>
                            <div className={css.rightContainer}>
                                <div className={css.title}>
                                    {msg.data}
                                </div>
                                <div>{msg.modifyData}</div>
                            </div>
                        </Link>
                    </Col>
                <Col span={8} className={css.col}>
                <Link to='account/notifications' className={css.link}> 
                        <div className={css.leftContainer}><NotificationTwoTone twoToneColor="#FFC300" /></div>
                        <div className={css.rightContainer}>
                            <div className={css.notifTitle}>
                                {msg.notifications}
                            </div>
                            <div>{msg.contact}</div>
                        </div>
                    </Link>
                </Col>
                <Col span={8} className={css.col}>
                <Link to='account/private' className={css.link}>
                        <div className={joinClasses(css.leftContainer, css.leftColor2)}><FaCookieBite /></div>
                        <div className={css.rightContainer}>
                            <div className={css.title}>
                                {msg.private}
                            </div>
                            <div>{msg.cookies}</div>
                        </div>
                    </Link>
                </Col>
                <Col span={8} className={css.col}>
                <Link to='account/points' className={css.link}>
                        <div className={joinClasses(css.leftContainer, css.leftColor3)}><GiftOutlined /></div>
                        <div className={css.rightContainer}>
                            <div className={css.title}>
                                {msg.points}
                            </div>
                            <div>{msg.nbrPoints}</div>
                        </div>
                    </Link>
                </Col>
            </Row>
        </div >
    )
}
