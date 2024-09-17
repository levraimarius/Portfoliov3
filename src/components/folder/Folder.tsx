import './index.scss'

type FolderProps = {
    title: string
}

export default function Folder({ title }: FolderProps) {
    return (
        <div className='folderContainer'>
            <div className='folder'>
                <div className='folderTop folderPiece'></div>
                <div className='folderBack folderPiece'></div>
                <div className='folderFront folderPiece'></div>
            </div>

            <div>{title}</div>
        </div>
    )
}
