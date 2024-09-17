import './Computer.scss'

export default function Computer() {
    return (
        <div className='computerComponent'>
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
