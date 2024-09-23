import { MouseEventHandler } from 'react'
import Window from '../components/window/Window'

type ProjectsPageProps = {
    closeEvent: MouseEventHandler
}

export default function ProjectsPage({ closeEvent }: ProjectsPageProps) {
    return (
        <div>
            <Window title='hoho' closeEvent={closeEvent}>
                <>blabla</>
            </Window>
        </div>
    )
}
