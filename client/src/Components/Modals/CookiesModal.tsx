import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Modal } from '../../OwnComponents/modal/Modal'
import { yukioSelector } from '../../selectors/selectors'
import { useMemoDispatch } from '../../hooks/useMemoDispatch'
import { YukioActions } from '../../store/yukio.actions'

export const CookiesModal: React.FC = () => {
    const show = useSelector(yukioSelector.get)
    const [isOpen, setIsOpen] = useState(show)
    const dispatchDisabledCookies = useMemoDispatch(YukioActions.make({ type: 'DisabledCookies' }))
    const onClose = () => {
        setIsOpen(false)
        dispatchDisabledCookies()
    }
    console.log(isOpen)


    return (
        <Modal visible={isOpen} footer={null} title={null} destroyOnClose onCancel={onClose}>
            YO
        </Modal>
    )
}
