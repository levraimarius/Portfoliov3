import './Computer.scss'

type ComputerProps = {
    clickEvent: () => void
    isComputerOpen: boolean
}

export default function Computer({ clickEvent, isComputerOpen }: ComputerProps) {
    return (
        <div className={`computerComponent ${isComputerOpen ? 'isComputerOpen' : ''}`} onClick={clickEvent}>
            <div className='screenContainer'>
                <div className='screen'></div>
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
