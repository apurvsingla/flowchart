import React, { useState } from 'react';
import {MainContainer, 
ButtonBackground, 
ButtonDiv,
InputCheckBox,
InputLabel,
SwitchButton
} from './Port.style';
import BottomContainer from '../BottomContainer/BottomContainer';

const Port = () => {
    const [a1, setA1] = useState(false);
    const [a2, setA2] = useState(false);
    const [a, setA] = useState(false);
    const [b1, setB1] = useState(false);
    const [b2, setB2] = useState(false);
    const [b, setB] = useState(false);
    const [c1, setC1] = useState(false);
    const [c2, setC2] = useState(false);
    const [c, setC] = useState(false);
    const [d1, setD1] = useState(false);
    const [d2, setD2] = useState(false);
    const [d, setD] = useState(false);
    

    const onA1ValueChange = () => {
        setA1(!a1);
        localStorage.setItem('A1', a1);
        if(JSON.parse(localStorage.getItem('A1')) === false){
            localStorage.setItem('A', false);
        }
    }
    const onA2ValueChange = () => {
        setA2(!a2);
        localStorage.setItem('A2', a2);
        if(JSON.parse(localStorage.getItem('A2')) === false){
            localStorage.setItem('A', false);
        }
    }
    const onAValueChange = () => {
        setA(!a);
        setA2(!a2);
        setA(!a);
        localStorage.setItem('A', a);
        localStorage.setItem('A1', a);
        localStorage.setItem('A2', a);
    }
    const onB1ValueChange = () => {
        setB1(!b1);
        localStorage.setItem('B1', b1);
        if(JSON.parse(localStorage.getItem('B1')) === false){
            localStorage.setItem('B', false);
        }
    }
    const onB2ValueChange = () => {
        setB2(!b2);
        localStorage.setItem('B2', b2);
        if(JSON.parse(localStorage.getItem('B2')) === false){
            localStorage.setItem('B', false);
        }
    }
    const onBValueChange = () => {
        setB1(!b1);
        setB2(!b2);
        setB(!b);
        localStorage.setItem('B', b);
        localStorage.setItem('B1', b);
        localStorage.setItem('B2', b);
    }
    const onC1ValueChange = () => {
        setC1(!c1);
        localStorage.setItem('C1', c1);
        if(JSON.parse(localStorage.getItem('C1')) === false){
            localStorage.setItem('C', false);
        }
    }
    const onC2ValueChange = () => {
        setC2(!c2);
        localStorage.setItem('C2', c2);
        if(JSON.parse(localStorage.getItem('C2')) === false){
            localStorage.setItem('C', false);
        }
    }
    const onCValueChange = () => {
        setC1(!c1);
        setC2(!c2);
        setC(!c);
        localStorage.setItem('C', c);
        localStorage.setItem('C1', c);
        localStorage.setItem('C2', c);
    }
    const onD1ValueChange = () => {
        setD1(!d1);
        localStorage.setItem('D1', d1);
        if(JSON.parse(localStorage.getItem('D1')) === false){
            localStorage.setItem('D', false);
        }
    }
    const onD2ValueChange = () => {
        setD2(!d2);
        localStorage.setItem('D2', d2);
        if(JSON.parse(localStorage.getItem('D2')) === false){
            localStorage.setItem('D', false);
        }
    }
    const onDValueChange = () => {
        setD1(!d1);
        setD2(!d2);
        setD(!d);
        localStorage.setItem('D', d);
        localStorage.setItem('D1', d);
        localStorage.setItem('D2', d);
    }  
        return (
            <>
            <MainContainer>
                <ButtonDiv>
                <ButtonBackground>
                        <InputLabel>
                            A1
                            <InputCheckBox type="checkbox" 
                            checked={JSON.parse(localStorage.getItem('A1')) || false}
                            onChange={() => onA1ValueChange()}/>
                        </InputLabel>
                        <InputLabel>
                            A2
                            <InputCheckBox type="checkbox" 
                            checked={JSON.parse(localStorage.getItem('A2')) || false}
                            onChange={() => onA2ValueChange()}/>
                        </InputLabel>
                        <SwitchButton type="checkbox" 
                        checkedIcon={false} 
                        uncheckedIcon={false}
                        checked={JSON.parse(localStorage.getItem('A')) || false}
                        onChange={() => onAValueChange()}
                        height={20}
                        handleDiameter={18}/>
                    </ButtonBackground>
                    <ButtonBackground>
                        <InputLabel>
                            B1
                            <InputCheckBox type="checkbox" 
                            checked={JSON.parse(localStorage.getItem('B1')) || false}
                            onChange={() => onB1ValueChange()}/>
                        </InputLabel>
                        <InputLabel>
                            B2
                            <InputCheckBox type="checkbox" 
                            checked={JSON.parse(localStorage.getItem('B2')) || false}
                            onChange={() => onB2ValueChange()}/>
                        </InputLabel>
                        <SwitchButton type="checkbox" checkedIcon={false} uncheckedIcon={false}
                        checked={JSON.parse(localStorage.getItem('B')) || false}
                        onChange={() => onBValueChange()}
                            height={20}
                            handleDiameter={18}/>
                    </ButtonBackground>
                </ButtonDiv>

                <div className='center-image'>
                    <img src={process.env.PUBLIC_URL + '/images/login/illus_ace.png'}  alt="logo" width="280"/>
                </div>

                <div className='right-main'>
                    <ButtonBackground>
                        <InputLabel>
                            C1
                            <InputCheckBox type="checkbox" 
                            checked={JSON.parse(localStorage.getItem('C1')) || false}
                            onChange={() => onC1ValueChange()}/>
                        </InputLabel>
                        <InputLabel>
                            C2
                            <InputCheckBox type="checkbox" 
                            checked={JSON.parse(localStorage.getItem('C2')) || false}
                            onChange={() => onC2ValueChange()}/>
                        </InputLabel>
                        <SwitchButton type="checkbox" checkedIcon={false} uncheckedIcon={false}
                        checked={JSON.parse(localStorage.getItem('C')) || false}
                        onChange={() => onCValueChange()}
                            height={20}
                            handleDiameter={18}/>
                    </ButtonBackground>
                    <ButtonBackground>
                        <InputLabel>
                            D1
                            <InputCheckBox type="checkbox" 
                            checked={JSON.parse(localStorage.getItem('D1')) || false}
                            onChange={() => onD1ValueChange()}/>
                        </InputLabel>
                        <InputLabel>
                            D2
                            <InputCheckBox type="checkbox" 
                            checked={JSON.parse(localStorage.getItem('D2')) || false}
                            onChange={() => onD2ValueChange()}/>
                        </InputLabel>
                        <SwitchButton type="checkbox" checkedIcon={false} uncheckedIcon={false}
                        checked={JSON.parse(localStorage.getItem('D')) || false}
                        onChange={() => onDValueChange()}
                        height={20}
                        handleDiameter={18}/>
                    </ButtonBackground>
                </div>
                
            </MainContainer>
            <br/>
            <BottomContainer to="/input-output" prev="/"/>
            </>
            
        );
}

export default Port;
