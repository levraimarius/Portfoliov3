import { MouseEventHandler } from 'react'
import Window from '../components/window/Window'

type TechnologiesPageProps = {
    closeEvent: MouseEventHandler
}

export default function TechnlogiesPage({ closeEvent }: TechnologiesPageProps) {
    return (
        <Window title='Mes technologies' closeEvent={closeEvent}>
            <>Mes techno ici</>
        </Window>
    )
}
