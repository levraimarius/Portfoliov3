import { MouseEventHandler } from 'react'
import './index.scss'

type FolderProps = {
    title: string
    clickEvent: MouseEventHandler
}

export default function Folder({ title, clickEvent }: FolderProps) {
    return (
        <div className='folderContainer' onClick={clickEvent}>
            <div className='folder'>
                <div className='folderTop folderPiece'></div>
                <div className='folderBack folderPiece'></div>
                <div className='folderFront folderPiece'></div>
            </div>

            <div>{title}</div>
        </div>
    )
}
