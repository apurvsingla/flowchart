import React from 'react';
import Draggable from 'react-draggable';

const Dots = (props) => {
    const handleClick = (e) => {
        console.log(e.target.className);
    }

    return (
        <Draggable
            defaultPosition={props.defaultPosition}
            onStop={props.onStop}
            onClick={props.onClick}
            >
            
            <div className="drag-box" style={{position: 'absolute'}}>

                {props.top ? (<span 
                className="top-dot"
                style={{position: 'absolute', 
                left: '58px', 
                top: '-9px', 
                height: '8px', 
                width: '10px', 
                
                backgroundColor: 'black'}}
                onMouseOver={(e) => handleClick(e)}
                >
                </span>) : null}

                {props.right ? (<span 
                className="right-dot"
                style={{position: 'absolute', 
                right: '-9px',  height: '10px', 
                width: '8px', 
                backgroundColor: 'black', top: '15px'}}
                onMouseOver={(e) => handleClick(e)}
                >
                </span>): null}

                {props.bottom ? (<span 
                className="bottom-dot" 
                style={{position: 'absolute', 
                left: '58px', bottom: '-5px', 
                height: '8px', width: '10px', backgroundColor: 'black'}}
                onMouseOver={(e) => handleClick(e)}
                >
                </span>) : null}

                <img src={props.src} 
                alt="logo" width="120px"
                />
            </div>
        </Draggable>
    );
}

export default Dots;
