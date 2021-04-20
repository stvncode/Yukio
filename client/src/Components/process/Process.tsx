import React, { useState } from 'react'
import { profilAccepted } from '../../api/profile'
import { Button } from '../../OwnComponents/button/Button'
import logo from '../../assets/logo.png'
import { useTranslator } from '../../hooks/use-translator'
import { ProcessMsg } from './process.msg'
import { css } from './process.styles'
import { Col, Row, Steps } from 'antd'
import { ArrowLeftOutlined } from '@ant-design/icons'
import { Process1 } from './Process1'
import { Process2 } from './Process2'

const { Step } = Steps

export const Process: React.FC = () => {
    const msg = useTranslator(ProcessMsg)
    const [current, setCurrent] = useState(0)

    const accepted = () => {
        profilAccepted()
        window.location.reload()
    }

    const next = () => {
        setCurrent(current + 1)
    }

    const prev = () => {
        setCurrent(current - 1)
    }

    const steps = [
        {
            title: 'First',
            content: <Process1 next={next} />
        },
        {
            title: 'Second',
            content: <Process2 next={next} />
        },
        {
            title: 'Last',
            content: 'Last-content',
        },
    ]

    return (
        <div className={css.container}>
            <div className={css.navbar}>
                <Row>
                    <Col span={4}>
                        <img src={logo} className={css.logo} />
                    </Col>
                    <Col span={20}>
                        <Steps current={current}>
                            {steps.map(item => (
                                <Step key={item.title} title={item.title} />
                            ))}
                        </Steps>
                    </Col>
                </Row>
            </div>
            {current > 0 && (
                <ArrowLeftOutlined className={css.arrow} onClick={() => prev()} />
            )}
            <div className={css.main}>
                <div className={css.leftContainer}>{steps[current].content}</div>
                <div className={css.rightContainer}>
                    {current < steps.length - 1 && (
                        <Button type="primary" onClick={() => next()}>
                            Next
                        </Button>
                    )}
                    {current === steps.length - 1 && (
                        <Button type="primary">
                            Done
                        </Button>
                    )}
                    {/* {current > 0 && (
                        <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
                            Previous
                        </Button>
                    )} */}
                    {/* <Button onClick={accepted}>Yooo</Button> */}
                </div>
            </div>
        </div>
    )
}
