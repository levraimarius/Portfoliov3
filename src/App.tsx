import { useState } from 'react'
import Computer from './components/computer/Computer'
import Desk from './components/desk/Desk'
import Window from './components/window/Window'
import './index.scss'

function App() {
    const [isComputerOpen, setIsComputerOpen] = useState(false)
    return (
        <div className='roomContainer'>
            <Desk></Desk>
            <Computer clickEvent={() => setIsComputerOpen(!isComputerOpen)} isComputerOpen={isComputerOpen} />
            {/* <Window title='blablabla' children={<div>blablablbal</div>} /> */}
        </div>
    )
}

export default App
