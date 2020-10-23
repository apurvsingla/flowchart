import React from 'react';
import Draggable from 'react-draggable';
import LineTo from 'react-lineto';

const Dots = (props) => {
    const [click, setClick] = React.useState(0);
    const [clas, setClas] = React.useState();

    React.useEffect(() => {
        console.log(clas ,click);
    }, [click, clas]);

    const handleClick = (e) => {
        console.log(e.target.className);
        setClick(click + 1);
        if(click === 1){
            setClas(e.target.className);
        }
        if(click === 2){
            setClas(e.target.className);
        }
        if(click === 3){
            setClick(1);
            setClas(e.target.className);
        }
    }

    return (<>
     <LineTo from={click===1 ? clas : null} to={click===2 ? clas : null} />
        <Draggable
            defaultPosition={props.defaultPosition}
            onStop={props.onStop}
            onClick={props.onClick}
            >
            
            <div className="drag-box" style={{position: 'absolute'}}>

                {props.top ? (<span 
                className={props.properClass + "-top-dot"}
                style={{position: 'absolute', 
                left: '58px', 
                top: '-9px', 
                height: '8px', 
                width: '10px', 
                backgroundColor: 'black'}}
                onClick={(e) => handleClick(e)}
                >
                </span>) : null}

                {props.right ? (<span 
                className={props.properClass + "-right-dot"}
                style={{position: 'absolute', 
                right: '-9px',  height: '10px', 
                width: '8px', 
                backgroundColor: 'black', top: '15px'}}
                onClick={(e) => handleClick(e)}
                >
                </span>): null}

                {props.bottom ? (<span 
                className={props.properClass + "-bottom-dot"}
                style={{position: 'absolute', 
                left: '58px', bottom: '-5px', 
                height: '8px', width: '10px', backgroundColor: 'black'}}
                onClick={(e) => handleClick(e)}
                >
                </span>) : null}

                <img src={props.src} 
                alt="logo" width="120px"
                />
            </div>
        </Draggable>
        </>
    );
}

export default Dots;
