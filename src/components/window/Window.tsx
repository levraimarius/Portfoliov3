import { ReactElement } from 'react'

import './index.scss'

type WindowProps = {
    children: ReactElement
    title: string
}

export default function Window({ children, title }: WindowProps) {
    return (
        <div className='windowComponent'>
            <div className='windowTop'>
                <div className='dotsContainer'>
                    <div className='dot red'></div>
                    <div className='dot orange'></div>
                    <div className='dot green'></div>
                </div>
                <div className='title'>{title}</div>
            </div>
            {children}
        </div>
    )
}
