import Folder from '../components/folder/Folder'

type DesktopHomepageProps = {
    clickEvent: (value: string) => void
}

export default function DesktopHomepage({ clickEvent }: DesktopHomepageProps) {
    return (
        <div className='desktopHomepage'>
            <Folder title='Mon expérience' clickEvent={() => clickEvent('experience')} />
            <Folder title='Mes projets' clickEvent={() => clickEvent('projects')} />
            <Folder title='Mes technos' clickEvent={() => clickEvent('technologies')} />
        </div>
    )
}
