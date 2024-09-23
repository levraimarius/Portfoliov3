import { useState } from 'react'
import Computer from './components/computer/Computer'
import Desk from './components/desk/Desk'
import './index.scss'
import MenuItem from './components/menuItem/MenuItem'

function App() {
    const [isComputerOpen, setIsComputerOpen] = useState(false)
    const [opennedWindow, setOppennedWindow] = useState('')

    return (
        <div className='roomContainer'>
            <ul>
                <MenuItem
                    title='Accueil'
                    clickEvent={() => {
                        setOppennedWindow('')
                        setIsComputerOpen(false)
                    }}
                />
                <MenuItem
                    title='Expérience'
                    clickEvent={() => {
                        setOppennedWindow('experience')
                        setIsComputerOpen(true)
                    }}
                />
                <MenuItem
                    title='Projets'
                    clickEvent={() => {
                        setOppennedWindow('projects')
                        setIsComputerOpen(true)
                    }}
                />
                <MenuItem
                    title='Technologies'
                    clickEvent={() => {
                        setOppennedWindow('technologies')
                        setIsComputerOpen(true)
                    }}
                />
            </ul>

            {!isComputerOpen && <Desk></Desk>}
            <Computer
                opennedWindow={opennedWindow}
                setOppennedWindow={setOppennedWindow}
                clickEvent={() => setIsComputerOpen(!isComputerOpen)}
                isComputerOpen={isComputerOpen}
            />
            {/* <Window title='blablabla' children={<div>blablablbal</div>} /> */}
        </div>
    )
}

export default App
