import Computer from './components/computer/Computer'
import Desk from './components/desk/Desk'
import './index.scss'

function App() {
    return (
        <div className='roomContainer'>
            <Desk></Desk>
            <Computer />
        </div>
    )
}

export default App
