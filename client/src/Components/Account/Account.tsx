import React, { useState, useContext } from 'react'
import { Button } from '../../OwnComponents/button/Button'
import { useTranslator } from '../../hooks/use-translator'
import { AccountMsg } from './account.msg'
import { css } from './account.styles'
import { updateProfile } from '../../api/profile';
import { myContext } from '../../Context/UserContext'
import { IUser } from '../../types/maintypes'
import { UserOutlined, IdcardOutlined, NotificationTwoTone, GiftOutlined } from '@ant-design/icons'
import { Col, Row } from 'antd'
import { FaCookieBite } from 'react-icons/fa'

export const Account: React.FC = () => {
    const msg = useTranslator(AccountMsg)

    const user = useContext(myContext) as IUser

    const [fN, setFN] = useState('')
    const [lN, setLN] = useState('')

    //TODO: Use breadcrumb for inside

    return (
        <div className={css.container}>
            <div><UserOutlined className={css.icon} /></div>
            <div className={css.hello}>{msg.hello(user.username)}</div>
            <div>{msg.space}</div>
            <Row gutter={[16, 16]} className={css.row} justify='center'>
                <Col span={8} className={css.col} onClick={() => console.log('yo')}>
                    <div>
                        <div style={{ float: 'left', width: '25%', lineHeight: '8rem', fontSize: '2.5rem', color: '#355CB5' }}><IdcardOutlined /></div>
                        <div style={{ float: 'right', width: '75%' }}>
                            <div style={{ fontWeight: 'bold', marginBottom: '1rem', marginTop: '0.2rem' }}>
                                Données personnelles
                            </div>
                            <div>Consultez et modifiez les données de votre compte Yukio</div>
                        </div>
                    </div>
                </Col>
                <Col span={8} className={css.col}>
                    <div>
                        <div style={{ float: 'left', width: '25%', lineHeight: '8rem', fontSize: '2.5rem' }}><NotificationTwoTone twoToneColor="#FFC300" /></div>
                        <div style={{ float: 'right', width: '75%' }}>
                            <div style={{ fontWeight: 'bold', marginBottom: '0.3rem', marginTop: '0.2rem' }}>
                                Notifications
                            </div>
                            <div>Choisissez vos préférences de notification et la facon dont vous souhaitez être contacté</div>
                        </div>
                    </div>
                </Col>
                <Col span={8} className={css.col}>
                    <div>
                        <div style={{ float: 'left', width: '25%', lineHeight: '8rem', fontSize: '2.5rem', color: '#873600' }}><FaCookieBite /></div>
                        <div style={{ float: 'right', width: '75%' }}>
                            <div style={{ fontWeight: 'bold', marginBottom: '1rem', marginTop: '0.2rem' }}>
                                Vie privée
                            </div>
                            <div>Contrôlez la gestion des cookies et de vos données</div>
                        </div>
                    </div>
                </Col>
                <Col span={8} className={css.col}>
                    <div>
                        <div style={{ float: 'left', width: '25%', lineHeight: '8rem', fontSize: '2.5rem', color: '#C70039' }}><GiftOutlined /></div>
                        <div style={{ float: 'right', width: '75%' }}>
                            <div style={{ fontWeight: 'bold', marginBottom: '1rem', marginTop: '0.2rem' }}>
                                Parrainage
                            </div>
                            <div>Consultez vos parrainages, ainsi que votre cagnotte</div>
                        </div>
                    </div>
                </Col>
            </Row>
            {/* <Input onChange={e => setFN(e.target.value)} name="types" value={fN} className={css.input}></Input>
            <Input onChange={e => setLN(e.target.value)} name="types" value={lN} className={css.input}></Input>
            <Button onClick={() => updateProfile({ firstName: fN, lastName: lN })} className={css.button}>{msg.update}</Button> */}
        </div >
    )
}
