import React from 'react';
import Draggable from 'react-draggable';
import Line from 'react-lineto';

const Dots = (props) => {
    const drawLine = () => {
        console.log(true);
    }

    const toDrawLine = () => {
        console.log(true)
    }
    drawLine();
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
                width: '8px', 
                borderRadius: '50%', 
                backgroundColor: 'black'}}>
                    <Line from={() => drawLine()} to={() => toDrawLine()} /></span>
                ) : null}

                {props.right ? (<span 
                className="right-dot"
                style={{position: 'absolute', 
                right: '-9px',  height: '8px', 
                width: '8px', borderRadius: '50%', 
                backgroundColor: 'black', top: '15px'}}>
                    <Line from={() => drawLine()} to={() => toDrawLine()} />
                </span>): null}

                {props.bottom ? (<span 
                className="bottom-dot" 
                style={{position: 'absolute', 
                left: '58px', bottom: '-5px', 
                height: '8px', width: '8px', 
                borderRadius: '50%', backgroundColor: 'black'}}>
                    <Line from={() => drawLine()} to={() => toDrawLine()} />
                </span>) : null}

                <img src={props.src} 
                alt="logo" width="120px"
                />

            </div>
        </Draggable>
    );
}

export default Dots;
