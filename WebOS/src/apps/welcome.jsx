import Draggable, {DraggableCore} from 'react-draggable';

function welcome() {

    return(
        <Draggable>
            <div className="app" id="welcome">
                <h1>Hello</h1>
                <p>Welcome to my website. Here you will be able to explore all about my work, projects and interests whilst having a great time interacting in this web-based desktop environment</p>
            </div>
        </Draggable>
    )
}

export default welcome