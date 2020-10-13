import React from 'react';
import {Main, InnerDiv, Container, Left, DigitalContainerForComponent} from './DigitalAnalog.styles';
import BottomContainer from '../BottomContainer/BottomContainer';
import DigitalContainer from '../DigitalContainer/DigitalContainer';
import './DigitalAnalog.styles.scss';
import useLocalStorage from '../LocalStorage/LocalStorage';

function DigitalAnalog() {
    const A1DIGI = JSON.parse(localStorage.getItem('A1'));
    const A2DIGI = JSON.parse(localStorage.getItem('A2'));
    const B1DIGI = JSON.parse(localStorage.getItem('B1'));
    const B2DIGI = JSON.parse(localStorage.getItem('B2'));
    const C1DIGI = JSON.parse(localStorage.getItem('C1'));
    const C2DIGI = JSON.parse(localStorage.getItem('C2'));
    const D1DIGI = JSON.parse(localStorage.getItem('D1'));
    const D2DIGI = JSON.parse(localStorage.getItem('D2'));
    const SPI = JSON.parse(localStorage.getItem('spi'));
    const I2C = JSON.parse(localStorage.getItem('i2c'));
    const UART = JSON.parse(localStorage.getItem('uart'));

    const [a1Digi, setA1Digi] = useLocalStorage('A1DIGI', false);
    const [b1Digi, setB1Digi] = useLocalStorage('B1DIGI', false);
    const [c1Digi, setC1Digi] = useLocalStorage('C1DIGI', false);
    const [a2Digi, setA2Digi] = useLocalStorage('A2DIGI', false);
    const [b2Digi, setB2Digi] = useLocalStorage('B2DIGI', false);
    const [c2Digi, setC2Digi] = useLocalStorage('C2DIGI', false);
    const [d2Digi, setD2Digi] = useLocalStorage('D2DIGI', false);

    const [pwmA1, setPwmA1] = useLocalStorage('PWMA1', false);
    const [pwmD1, setPwmD1] = useLocalStorage('PWMD1', false);
   
   
    const toggleA1 = () => {
        setA1Digi(false);
    }
    const toggleA2 = () => {
        setA2Digi(!a2Digi);
    }
    const toggleB1 = () => {
        setB1Digi(!b1Digi);
    }
    const toggleB2 = () => {
        setB2Digi(!b2Digi);
    }
    const toggleC1 = () => {
        setC1Digi(!c1Digi);
    }
    const toggleC2 = () => {
        setC2Digi(!c2Digi);
    }
    const toggleD2 = () => {
        setD2Digi(!d2Digi);
    }
    const togglePWMA1 = () => {
        if(a1Digi === true){
            setPwmA1(!pwmA1);
        }
    }
    const togglePWMD1 = () => {
        setPwmD1(!pwmD1);
    }
    
    return (<>
        <Main>
            <InnerDiv>
                <Container>
                    <DigitalContainer text="A1" text1="A2"
                    changeToggle1={toggleA1}
                    checked={false}
                    checked1={a2Digi}
                    changeToggle2={toggleA2}
                    disable1={!A1DIGI || false} 
                    disable2={!A2DIGI|| false}
                    togglePWM1={togglePWMA1}
                    checkedPWM1={JSON.parse(localStorage.getItem('a1-I/O')) ? true: false}
                    isTrue={true}
                        />
                        
                    <DigitalContainer text="B1" text1="B2"
                    changeToggle1={toggleB1}
                    checked={b1Digi}
                    checked1={b2Digi}
                    changeToggle2={toggleB2}
                    disable1={!B1DIGI} 
                    disable2={!B2DIGI}
                    uart={UART}
                        />
                </Container>
                <Container>
                    {SPI? (<DigitalContainerForComponent>
                <Left>
                    <div className="left-spi">
                        <label>SPI</label>
                        <input type="checkbox" className="circle spicircle" 
                        onChange={() => true}
                        checked={JSON.parse(localStorage.getItem('spi')) || false} />
                    </div>
                    <div className="right-spi">
                        <p>C1 &rarr; MOSI</p>
                        <p>C2 &rarr; CLK</p>
                        <p>D1 &rarr; MISO</p>
                        <p className="left-para">D2 &rarr; CS</p>
                    </div>
                </Left>
            </DigitalContainerForComponent>): 
                    <>
                    <DigitalContainer text="C1" text1="C2"
                    disable1={!C1DIGI} 
                    disable2={!C2DIGI}
                    changeToggle1={toggleC1}
                    checked={c1Digi}
                    checked1={c2Digi}
                    changeToggle2={toggleC2} 
                    />
                        
                    {I2C ? <DigitalContainerForComponent className="lower-digital">
                <Left>
                    <label>I2C</label>
                    <input type="checkbox" className="circle" 
                    onChange={() => true}
                    checked={JSON.parse(localStorage.getItem('i2c')) || false} />
                </Left>
                <div className="right-ic2">
                    <p>D1 &rarr; SCL</p>
                    <p className="left-para">D2 &rarr; SDA</p>
                </div>
            </DigitalContainerForComponent>: <DigitalContainer text="D1" text1="D2" 
                    disable1={!D1DIGI} 
                    disable2={!D2DIGI}
                    changeToggle1={() => true}
                    checked={false}
                    checked1={d2Digi}
                    changeToggle2={toggleD2}
                    togglePWM1={togglePWMD1}
                    isTrue={true}
                    checkedPWM1={JSON.parse(localStorage.getItem('d1-I/O')) ? true: false}
                    />
                            }
                    </>}
                    
                </Container>
                <div></div>
            </InnerDiv>
        </Main>
        <br/>
        <BottomContainer to="/flowchart" prev="/input-output"/>
        </>
    );
}

export default DigitalAnalog;
