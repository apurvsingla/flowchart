import React from 'react';
import BottomContainer from '../BottomContainer/BottomContainer';
import {useLocalStorage} from '../LocalStorage/LocalStorage';
import Dots from '../Dots/Dots';
import './Flowchart.styles.scss';

function Flowchart() {
    const [img, setImg] = useLocalStorage('img1', [{defaultPosition: {x: 0, y: 0}}]);
    const [img2, setImg2] = useLocalStorage('img2',[]);
    const [img3, setImg3] = useLocalStorage('img3',[]);
    const [img4, setImg4] = useLocalStorage('img4',[]);
    const [img5, setImg5] = useLocalStorage('img5',[]);
    const [img6, setImg6] = useLocalStorage('img6',[]);

    const saveState = (x,y) => {
        setImg({x,y})
    }

    const saveState2 = (id, x,y) => {
        const index = img2.findIndex(e => e.id === id.id);
        img2[index] = id;
        setImg2(img2)
    }

    const saveState3 = (id, x,y) => {
        const index = img3.findIndex(e => e.id === id.id);
        img3[index] = id;
        setImg3(img3)
    }

    const saveState4 = (id, x,y) => {
        const index = img4.findIndex(e => e.id === id.id);
        img4[index] = id;
        setImg4(img4)
    }

    const saveState5 = (id, x,y) => {
        const index = img5.findIndex(e => e.id === id.id);
        img5[index] = id;
        setImg5(img5)
    }

    const saveState6 = (id, x,y) => {
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

    // const drawLine = () => {

    // }

    const onDragPos = (id) => {
        console.log('yeah');

        if(img2.defaultPosition === {x: 18, y: 21}){
            const index = img2.findIndex(e => e.id === id.id);
            img.slice(index, 1);
            setImg2(img2);
        }
    }

    return (<>
        <div className="main-flowchart">
            <div className="left-flowchart" style={{position:"absolute", top: '8%'}}>
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
            </div>
            <div className="right-flowchart">
                {<Dots
                defaultPosition={img.x ? img.x.defaultPosition : img.x}
                onStop={(e, data) => {
                    saveState({id: img.id, defaultPosition: { x: data.x, y: data.y }})
                }}  src={process.env.PUBLIC_URL + '/images/flowcharts/learn_flow_start.png'}
                bottom={true}
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
                    onClick={(e, data) => onDragPos({id: img2.id, defaultPosition: { x: data.x, y: data.y } })}
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
                />
                )) : null}

                {img6.length >= 1 ? img6.map(img6 => (
                <Dots
                defaultPosition={img6.defaultPosition}
                onStop={(e, data) => {
                         saveState6({id: img6.id,  defaultPosition: { x: data.x, y: data.y } });
                       }}
                src={process.env.PUBLIC_URL + '/images/flowcharts/learn_flow_end-repeat.png'}
                top={true} />
                )): null}
                
            </div>
        </div>
        <BottomContainer prev="/digital-analog"/>
        </>
    );
}

export default Flowchart;
