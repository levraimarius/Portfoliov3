import { MouseEventHandler, ReactElement } from 'react'

import './index.scss'

type WindowProps = {
    children: ReactElement
    title: string
    closeEvent?: MouseEventHandler
}

export default function Window({ children, title, closeEvent }: WindowProps) {
    return (
        <div className='windowComponent'>
            <div className='windowTop'>
                <div className='dotsContainer'>
                    <div className='dot red' onClick={closeEvent}></div>
                    <div className='dot orange'></div>
                    <div className='dot green'></div>
                </div>
                <div className='title'>{title}</div>
            </div>
            {children}
        </div>
    )
}
