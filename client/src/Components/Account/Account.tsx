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
                        <Link to='account/data'> 
                            <div style={{ float: 'left', width: '25%', lineHeight: '8rem', fontSize: '2.5rem', color: '#355CB5' }}><IdcardOutlined /></div>
                            <div style={{ float: 'right', width: '75%'}}>
                                <div style={{ fontWeight: 'bold', marginBottom: '1rem', marginTop: '0.2rem' }}>
                                    {msg.data}
                                </div>
                                <div>{msg.modifyData}</div>
                            </div>
                        </Link>
                    </Col>
                <Col span={8} className={css.col}>
                    <div>
                        <div style={{ float: 'left', width: '25%', lineHeight: '8rem', fontSize: '2.5rem' }}><NotificationTwoTone twoToneColor="#FFC300" /></div>
                        <div style={{ float: 'right', width: '75%' }}>
                            <div style={{ fontWeight: 'bold', marginBottom: '0.3rem', marginTop: '0.2rem' }}>
                                {msg.notifications}
                            </div>
                            <div>{msg.contact}</div>
                        </div>
                    </div>
                </Col>
                <Col span={8} className={css.col}>
                    <div>
                        <div style={{ float: 'left', width: '25%', lineHeight: '8rem', fontSize: '2.5rem', color: '#873600' }}><FaCookieBite /></div>
                        <div style={{ float: 'right', width: '75%' }}>
                            <div style={{ fontWeight: 'bold', marginBottom: '1rem', marginTop: '0.2rem' }}>
                                {msg.private}
                            </div>
                            <div>{msg.cookies}</div>
                        </div>
                    </div>
                </Col>
                <Col span={8} className={css.col}>
                    <div>
                        <div style={{ float: 'left', width: '25%', lineHeight: '8rem', fontSize: '2.5rem', color: '#C70039' }}><GiftOutlined /></div>
                        <div style={{ float: 'right', width: '75%' }}>
                            <div style={{ fontWeight: 'bold', marginBottom: '1rem', marginTop: '0.2rem' }}>
                                {msg.points}
                            </div>
                            <div>{msg.nbrPoints}</div>
                        </div>
                    </div>
                </Col>
            </Row>
        </div >
    )
}
