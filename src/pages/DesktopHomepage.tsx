import Folder from '../components/folder/Folder'

export default function DesktopHomepage() {
    return (
        <div className='desktopHomepage'>
            <Folder title='Mon expérience' />
            <Folder title='Mes projets' />
            <Folder title='Mes technos' />
            <Folder title='Mon CV' />
        </div>
    )
}
