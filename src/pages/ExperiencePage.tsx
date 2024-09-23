import { MouseEventHandler } from 'react'
import Window from '../components/window/Window'

type ExperiencePageProps = {
    closeEvent: MouseEventHandler
}

export default function ExperiencePage({ closeEvent }: ExperiencePageProps) {
    return (
        <Window title='Mon experience' closeEvent={closeEvent}>
            <>Mes experiences ici</>
        </Window>
    )
}
