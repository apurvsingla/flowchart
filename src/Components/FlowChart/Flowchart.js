import React from 'react';
import BottomContainer from '../BottomContainer/BottomContainer';
import {useLocalStorage} from '../LocalStorage/LocalStorage';
import Dots from '../FlowchartDots/Dots';
// import LineTo from 'react-lineto';
// import CanvasDraw from "react-canvas-draw";
import './Flowchart.styles.scss';

function Flowchart() {
    const [img, setImg] = useLocalStorage('img1', [{defaultPosition: {x: 0, y: 0}}]);
    const [img2, setImg2] = useLocalStorage('img2',[]);
    const [img3, setImg3] = useLocalStorage('img3',[]);
    const [img4, setImg4] = useLocalStorage('img4',[]);
    const [img5, setImg5] = useLocalStorage('img5',[]);
    const [img6, setImg6] = useLocalStorage('img6',[]);
    // const [click, setClick] = React.useState(0);
    // const [draw, setDraw] = React.useState(false);

    // const [line, setLine] = React.useState(false);

    // const lineHandler = () => {
    //     setClick(click + 1);
    //     if(click === 1){
    //         return
    //     }
    //     if(click === 2){
    //         return 
    //     }
    //     if(click === 3){
    //         setClick(1)
    //     }
    // }

    // const toLineHandler = (e) => {
    //     console.log(e.target.className);
    // }

    // const toggle = () => {
    //     setDraw(!draw);
    // }

    const saveState = (x,y) => {
        setImg({x,y})
    }

    const saveState2 = (id) => {
        const index = img2.findIndex(e => e.id === id.id);
        img2[index] = id;
        setImg2(img2)
    }

    const saveState3 = (id) => {
        const index = img3.findIndex(e => e.id === id.id);
        img3[index] = id;
        setImg3(img3)
    }

    const saveState4 = (id) => {
        const index = img4.findIndex(e => e.id === id.id);
        img4[index] = id;
        setImg4(img4)
    }

    const saveState5 = (id) => {
        const index = img5.findIndex(e => e.id === id.id);
        img5[index] = id;
        setImg5(img5)
    }

    const saveState6 = (id) => {
        const index = img6.findIndex(e => e.id === id.id);
        img6[index] = id;
        setImg6(img6)
    }

    const onImage2Concat = () => {
        setImg2(img2 => img2.concat({id: Date.now(),defaultPosition: {x: 0, y: 0}}));
    }
    const onImage3Concat = () => {
        setImg3(img3 => img3.concat({id: Date.now(),defaultPosition: {x: 0, y: 0}}));
    }
    const onImage4Concat = () => {
        setImg4(img4 => img4.concat({id: Date.now(),defaultPosition: {x: 0, y: 0}}));
    }
    const onImage5Concat = () => {
        setImg5(img5 => img5.concat({id: Date.now(),defaultPosition: {x: 0, y: 0}}));
    }
    const onImage6Concat = () => {
        setImg6(img6 => img6.concat({id: Date.now(),defaultPosition: {x: 0, y: 0}}));
    }

    const onDragPosDel = (id) => {
        const index = img2.findIndex(e => e.id === id.id);
        if(img2[index].defaultPosition.x < '-20'){
            const newList = img2.slice(index,1);
            setImg2([...newList]);
        }
    }

    return (<>
        <div className="main-flowchart">
            <div className="left-flowchart" style={{position:"absolute", top: '8%'}}>
                {/* {img2.length>1 ? setImg2({}) : null} */}
                <img src={process.env.PUBLIC_URL + '/images/flowcharts/learn_flow_if.png'}  
                alt="logo"
                onClick={() => onImage2Concat()}
                />
                <img src={process.env.PUBLIC_URL + '/images/flowcharts/learn_flow_wait.png'}  
                alt="logo"
                onClick={() => onImage3Concat()}
                />
                <img src={process.env.PUBLIC_URL + '/images/flowcharts/learn_flow_loop.png'}  
                alt="logo"
                onClick={() => onImage4Concat()}
                />
                <img src={process.env.PUBLIC_URL + '/images/flowcharts/learn_flow_output.png'}  
                alt="logo"
                onClick={() => onImage5Concat()}
                />
                <img src={process.env.PUBLIC_URL + '/images/flowcharts/learn_flow_end-repeat.png'}  
                alt="logo"
                onClick={() => onImage6Concat()}
                />
                {/* <img src="" alt="yeah" onClick={() => lineHandler()} /> */}
            </div>

            <div className="right-flowchart">
                {/* <svg height={window.innerHeight} width="800" style={{position: "absolute"}}>
                    <path d="M20,50 L80,40"/>
                </svg> */}
                {/* {draw ? ( <CanvasDraw canvasWidth={1100} 
            canvasHeight={1200} 
            style={{position: 'absolute'}}
            // hideInterface='true' 
            hideGrid='true'
            saveData='true'
            brushRadius={2}/>) : null} */}
            {/* <LineTo from="first-bottom-dot" to="third-top-dot" /> */}
           
                {/* {line ? (
                <svg width="100%" height="100%">
                    <path d={'M ' + 2*(img.x.defaultPosition.x) + ',' + 
                    2*(img.x.defaultPosition.y) 
                    + ' C ' + (img.x.defaultPosition.x) + ',' + 
                    (img.x.defaultPosition.y) + ' ' + 
                    (img2[0].defaultPosition.x)  + ',' +
                    (img2[0].defaultPosition.y) + 
                    ' ' + (img2[0].defaultPosition.x) + ','+ 
                    (img2[0].defaultPosition.y)
                    }
                    style={{stroke: "black", strokeWidth:"3", 
                    fill: "none"
                     }}/>
                </svg>
               <span></span>
                ) : null}  */}

                {<Dots
                defaultPosition={img.x ? img.x.defaultPosition : img.x}
                onStop={(e, data) => {
                    saveState({id: img.id, defaultPosition: { x: data.x, y: data.y }})
                }}  src={process.env.PUBLIC_URL + '/images/flowcharts/learn_flow_start.png'}
                bottom={true}
                properClass="first"
                />}

                {img2.length>= 1 ? img2.map( img2 => (
                <Dots 
                    defaultPosition={img2.defaultPosition}
                    onStop={(e, data) => {
                        saveState2({id: img2.id, defaultPosition: { x: data.x, y: data.y } });
                    }}
                    src={process.env.PUBLIC_URL + '/images/flowcharts/learn_flow_if.png'} 
                    top={true}
                    bottom={true}
                    right={true}
                    properClass="second"
                    onClick={(e,data) => {
                        onDragPosDel({id: img2.id, defaultPosition: {x:data.x, y: data.y}})
                    }}
                />
                 )) : null}

                {img3.length>= 1 ? img3.map( img3 => (
                <Dots 
                defaultPosition={img3.defaultPosition}
                onStop={(e, data) => {
                         saveState3({id: img3.id,  defaultPosition: { x: data.x, y: data.y } });
                       }} 
                src={process.env.PUBLIC_URL + '/images/flowcharts/learn_flow_wait.png'}
                top={true}
                bottom={true}
                properClass="third"
                />
                )) : null}

                {img4.length>= 1 ? img4.map(img4 =>(
                <Dots
                defaultPosition={img4.defaultPosition}
                onStop={(e, data) => {
                         saveState4({id: img4.id,  defaultPosition: { x: data.x, y: data.y } });
                       }}
                src={process.env.PUBLIC_URL + '/images/flowcharts/learn_flow_loop.png'} 
                top={true}
                bottom={true}
                right={true}
                properClass="fourth"
                />
                )) : null}

                {img5.length >= 1 ? img5.map(img5 => (
                <Dots
                defaultPosition={img5.defaultPosition}
                onStop={(e, data) => {
                         saveState5({ id: img5.id, defaultPosition: { x: data.x, y: data.y } });
                    }}
                src={process.env.PUBLIC_URL + '/images/flowcharts/learn_flow_output.png'}
                top={true}
                bottom={true}
                properClass="fifth"
                />
                )) : null}

                {img6.length >= 1 ? img6.map(img6 => (
                <Dots
                defaultPosition={img6.defaultPosition}
                onStop={(e, data) => {
                         saveState6({id: img6.id,  defaultPosition: { x: data.x, y: data.y } });
                       }}
                src={process.env.PUBLIC_URL + '/images/flowcharts/learn_flow_end-repeat.png'}
                top={true}
                properClass="sixth"
                />
                )): null}
                
            </div>
        </div>
        <BottomContainer prev="/digital-analog"/>
        </>
    );
}

export default Flowchart;
