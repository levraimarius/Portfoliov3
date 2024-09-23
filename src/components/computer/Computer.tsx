import { useState } from 'react'
import DesktopHomepage from '../../pages/DesktopHomepage'
import './Computer.scss'
import ProjectsPage from '../../pages/ProjectsPage'
import ExperiencePage from '../../pages/ExperiencePage'
import TechnlogiesPage from '../../pages/TechnologiesPage'

type ComputerProps = {
    clickEvent: () => void
    isComputerOpen: boolean
    opennedWindow: string
    setOppennedWindow: (value: string) => void
}

export default function Computer({ clickEvent, isComputerOpen, opennedWindow, setOppennedWindow }: ComputerProps) {
    function getOpennedWindow() {
        switch (opennedWindow) {
            case 'experience': {
                return <ExperiencePage closeEvent={() => setOppennedWindow('')} />
            }
            case 'technologies': {
                return <TechnlogiesPage closeEvent={() => setOppennedWindow('')} />
            }
            default: {
                return <ProjectsPage closeEvent={() => setOppennedWindow('')} />
            }
        }
    }

    return (
        <div
            className={`computerComponent ${isComputerOpen || opennedWindow ? 'isComputerOpen' : ''}`}
            onClick={!isComputerOpen ? clickEvent : undefined}
        >
            <div className='screenContainer'>
                <div className='screen'>
                    {isComputerOpen && !opennedWindow ? (
                        <DesktopHomepage clickEvent={setOppennedWindow} />
                    ) : (
                        opennedWindow && getOpennedWindow()
                    )}
                </div>
                <div className='reflectionsContainer'>
                    <div className='reflection'></div>
                    <div className='reflection'></div>
                </div>
            </div>
            <div className='computerFoot'>
                <div className='partOne'></div>
                <div className='partTwo'></div>
            </div>
        </div>
    )
}
