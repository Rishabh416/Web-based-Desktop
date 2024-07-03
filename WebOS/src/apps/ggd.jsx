import Draggable from 'react-draggable'

function ggd() {
    return (
        <Draggable axis='both' handle='#ggdHandle' defaultPosition={{x:0, y:0}} >
            <div className="app" id="ggd">
                <div className='handle' id='ggdHandle'><h3>Going Green Dubai</h3></div>
                <iframe src="https://goinggreendubai.com" frameborder="0"></iframe>
            </div>
        </Draggable>
    )
}

export default ggd