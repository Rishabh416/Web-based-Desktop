import Draggable from 'react-draggable';

function welcome() {

    return(
        <Draggable axis='both' handle='#welcomeHandle' defaultPosition={{x:450, y:300}} >
            <div className="app" id="welcome">
                <div className='handle' id='welcomeHandle'><h3>Welcome</h3></div>
                <h1>Hello</h1>
                <p>Welcome to my website. Here you will be able to explore all about my work, projects and interests whilst having a great time interacting in this web-based desktop environment</p>
            </div>
        </Draggable>
    )
}

export default welcome