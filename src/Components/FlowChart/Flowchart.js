import React from 'react';
import BottomContainer from '../BottomContainer/BottomContainer';
import Draggable from 'react-draggable';
import {useLocalStorage} from '../LocalStorage/LocalStorage';
import './Flowchart.styles.scss';

function Flowchart() {
    // const classes = useStyles();
    const [img, setImg] = useLocalStorage('img1',false);
    const [img2, setImg2] = useLocalStorage('img2',false);
    const [img3, setImg3] = useLocalStorage('img3',false);
    const [img4, setImg4] = useLocalStorage('img4',false);
    const [img5, setImg5] = useLocalStorage('img5',false);
    const [img6, setImg6] = useLocalStorage('img6',false);

    const saveState = (x,y) => (
        setImg({x, y})
    )

    const saveState2 = (x,y) => (
        setImg2({x, y})
    )

    const saveState3 = (x,y) => (
        setImg3({x, y})
    )

    const saveState4 = (x,y) => (
        setImg4({x, y})
    )

    const saveState5 = (x,y) => (
        setImg5({x, y})
    )

    const saveState6 = (x,y) => (
        setImg6({x, y})
    )

    return (<>
        <div className="main-flowchart">
            <div className="left-flowchart" style={{position:"absolute", top: '8%'}}>
                <img src={process.env.PUBLIC_URL + '/images/flowcharts/learn_flow_start.png'}  
                alt="logo"
                onClick={() => setImg(!img)}
                />
                <img src={process.env.PUBLIC_URL + '/images/flowcharts/learn_flow_if.png'}  
                alt="logo"
                onClick={() => setImg2(!img2)}
                />
                <img src={process.env.PUBLIC_URL + '/images/flowcharts/learn_flow_wait.png'}  
                alt="logo"
                onClick={() => setImg3(!img3)}
                />
                <img src={process.env.PUBLIC_URL + '/images/flowcharts/learn_flow_loop.png'}  
                alt="logo"
                onClick={() => setImg4(!img4)}
                />
                <img src={process.env.PUBLIC_URL + '/images/flowcharts/learn_flow_output.png'}  
                alt="logo"
                onClick={() => setImg5(!img5)}
                />
                <img src={process.env.PUBLIC_URL + '/images/flowcharts/learn_flow_end-repeat.png'}  
                alt="logo"
                onClick={() => setImg6(!img6)}
                />
            </div>
            <div className="right-flowchart" style={{position: "absolute", top: "8%"}}>
                {img ? ( <Draggable
               
                position={img.x ? img.x.defaultPosition : img.x}
                 onStop={(e, data) => {
                          saveState({ defaultPosition: { x: data.x, y: data.y } });
                        }}>
                <img src={process.env.PUBLIC_URL + '/images/flowcharts/learn_flow_start.png'}  
                alt="logo" width="120px"
                />
                </Draggable>) : null}

                {img2 ? (<Draggable 
                
                position={img2.x ? img2.x.defaultPosition : img2.x}
                onStop={(e, data) => {
                         saveState2({ defaultPosition: { x: data.x, y: data.y } });
                       }}>
                <img src={process.env.PUBLIC_URL + '/images/flowcharts/learn_flow_if.png'}  
                alt="logo" width="120px"
                /></Draggable>) : null}

                {img3 ? (<Draggable
                position={img3.x ? img3.x.defaultPosition : img3.x}
                onStop={(e, data) => {
                         saveState3({ defaultPosition: { x: data.x, y: data.y } });
                       }}>
                <img src={process.env.PUBLIC_URL + '/images/flowcharts/learn_flow_wait.png'}  
                alt="logo" width="120px"
                /></Draggable>) : null}

                {img4 ? ( <Draggable
                position={img4.x ? img4.x.defaultPosition : img4.x}
                onStop={(e, data) => {
                         saveState4({ defaultPosition: { x: data.x, y: data.y } });
                       }}>
                <img src={process.env.PUBLIC_URL + '/images/flowcharts/learn_flow_loop.png'}  
                alt="logo" width="120px"
                />
                </Draggable>) : null}

                {img5 ? (<Draggable
                position={img5.x ? img5.x.defaultPosition : img5.x}
                onStop={(e, data) => {
                         saveState5({ defaultPosition: { x: data.x, y: data.y } });
                       }}>
                <img src={process.env.PUBLIC_URL + '/images/flowcharts/learn_flow_output.png'}  
                alt="logo" width="120px"
                /></Draggable>) : null}

                {img6 ? ( <Draggable
                position={img6.x ? img6.x.defaultPosition : img6.x}
                onStop={(e, data) => {
                         saveState6({ defaultPosition: { x: data.x, y: data.y } });
                       }}>
                <img src={process.env.PUBLIC_URL + '/images/flowcharts/learn_flow_end-repeat.png'}  
                alt="logo" width="120px"
                />
                </Draggable>) : null}
                
            </div>
        </div>
        <BottomContainer prev="/digital-analog"/>
        </>
    );
}

export default Flowchart;
