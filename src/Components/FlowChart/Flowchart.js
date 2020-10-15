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
    return (<>
        <div className="main-flowchart">
            <div className="left-flowchart">
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
            <div className="right-flowchart">
                {img ? ( <Draggable>
                <img src={process.env.PUBLIC_URL + '/images/flowcharts/learn_flow_start.png'}  
                alt="logo" width="120px"
                />
                </Draggable>) : null}
                {img2 ? (<Draggable> 
                <img src={process.env.PUBLIC_URL + '/images/flowcharts/learn_flow_if.png'}  
                alt="logo" width="120px"
                /></Draggable>) : null}
                {img3 ? (<Draggable> 
                <img src={process.env.PUBLIC_URL + '/images/flowcharts/learn_flow_wait.png'}  
                alt="logo" width="120px"
                /></Draggable>) : null}
                {img4 ? ( <Draggable>
                <img src={process.env.PUBLIC_URL + '/images/flowcharts/learn_flow_loop.png'}  
                alt="logo" width="120px"
                />
                </Draggable>) : null}
                {img5 ? (<Draggable>
                <img src={process.env.PUBLIC_URL + '/images/flowcharts/learn_flow_output.png'}  
                alt="logo" width="120px"
                /></Draggable>) : null}
                {img6 ? ( <Draggable>
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
