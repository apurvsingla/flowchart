import React, { Component } from 'react';
import {Main, InnerDiv, Container, Left, DigitalContainerForComponent} from './DigitalAnalog.styles';
import BottomContainer from '../BottomContainer/BottomContainer';
import DigitalContainer from '../DigitalContainer/DigitalContainer';
import './DigitalAnalog.styles.scss';
class DigitalAnalog extends Component {
    constructor(){
        super();
        let A1 = JSON.parse(localStorage.getItem('A1'));
        let A2 = JSON.parse(localStorage.getItem('A2'));
        let B1 = JSON.parse(localStorage.getItem('B1'));
        let B2 = JSON.parse(localStorage.getItem('B2'));
        let C1 = JSON.parse(localStorage.getItem('C1'));
        let C2 = JSON.parse(localStorage.getItem('C2'));
        let D1 = JSON.parse(localStorage.getItem('D1'));
        let D2 = JSON.parse(localStorage.getItem('D2'));
        let SPI = JSON.parse(localStorage.getItem('sp1'));
        let I2C = JSON.parse(localStorage.getItem('i2c'));
        let UART = JSON.parse(localStorage.getItem('uart'));
        this.state = {
            A1Digi: A1||false,
            B1Digi: B1||false,
            C1Digi: C1||false,
            D1Digi: D1||false,
            A2Digi: A2||false,
            B2Digi: B2||false,
            C2Digi: C2||false,
            D2Digi: D2||false,
            SPI: SPI,
            I2C: I2C,
            UART: UART,
            A1: false,
            A2: false,
            B1: false,
            B2: false,
            C1: false,
            C2: false,
            D1: false,
            D2: false,
        }
    }

     toggleA1 = () => {
        this.setState({A1: !this.state.A1});
        localStorage.setItem('A1DIGI', !this.state.A1)
    }
    toggleA2 = () => {
        this.setState({A2: !this.state.A2});
        localStorage.setItem('A2DIGI', !this.state.A2)
    }
    toggleB1 = () => {
        this.setState({B1: !this.state.B1});
        localStorage.setItem('B1DIGI', !this.state.B1)
    }
    toggleB2 = () => {
        this.setState({B2: !this.state.B2});
        localStorage.setItem('B2DIGI', !this.state.B2)
    }
    toggleC1 = () => {
        this.setState({C1: !this.state.C1});
        localStorage.setItem('C1DIGI', !this.state.C1)
    }
    toggleC2 = () => {
        this.setState({C2: !this.state.C2});
        localStorage.setItem('C2DIGI', !this.state.C2)
    }
    toggleD1 = () => {
        this.setState({D1: !this.state.D1});
        localStorage.setItem('D1DIGI', !this.state.D1)
    }
    toggleD2 = () => {
        this.setState({D2: !this.state.D2});
        localStorage.setItem('D2DIGI', !this.state.D2)
    }

    render() {
        return (<>
            <Main>
                <InnerDiv>
                    <Container>
                        <DigitalContainer text="A1" text1="A2"
                        changeToggle1={this.toggleA1}
                        checked={JSON.parse(localStorage.getItem('A1DIGI')) || false}
                        checked1={JSON.parse(localStorage.getItem('A2DIGI')) || false}
                        changeToggle2={this.toggleA2}
                        disable1={!this.state.A1Digi} 
                        disable2={!this.state.A2Digi} />
                        <DigitalContainer text="B1" text1="B2"
                        changeToggle1={this.toggleB1}
                        checked={JSON.parse(localStorage.getItem('B1DIGI')) || false}
                        checked1={JSON.parse(localStorage.getItem('B2DIGI')) || false}
                        changeToggle2={this.toggleB2}
                        disable1={!this.state.B1Digi} 
                        disable2={!this.state.B2Digi}
                        uart={this.state.UART} />
                    </Container>
                    <Container>
                        {this.state.SPI? (<DigitalContainerForComponent>
                    <Left>
                        <div className="left-spi">
                            <label>SPI</label>
                            <input type="checkbox" className="circle spicircle" 
                            onChange={this.toggleUart}
                            checked={JSON.parse(localStorage.getItem('sp1')) || false} />
                        </div>
                        <div className="right-spi">
                            <p>C1 &rarr; Clock</p>
                            <p>C2 &rarr; MOSI</p>
                            <p>D1 &rarr; MISO</p>
                            <p>D2 &rarr; RST</p>
                        </div>
                    </Left>
                </DigitalContainerForComponent>): 
                        <>
                        <DigitalContainer text="C1" text1="C2"
                        disable1={!this.state.C1Digi} 
                        disable2={!this.state.C2Digi}
                        changeToggle1={this.toggleC1}
                        checked={JSON.parse(localStorage.getItem('C1DIGI')) || false}
                        checked1={JSON.parse(localStorage.getItem('C2DIGI'))|| false}
                        changeToggle2={this.toggleC2} />
                          
                        {this.state.I2C ? <DigitalContainerForComponent className="lower-digital">
                    <Left>
                        <label>I2C</label>
                        <input type="checkbox" className="circle arrangeUartDigitalCircle" 
                        onChange={this.toggleI2C}
                        checked={JSON.parse(localStorage.getItem('i2c')) || false} />
                    </Left>
                    <div className="right-ic2">
                        <p>D1 &rarr; MISO</p>
                        <p>D2 &rarr; RST</p>
                    </div>
                </DigitalContainerForComponent>: <DigitalContainer text="D1" text1="D2" 
                        disable1={!this.state.D1Digi} 
                        disable2={!this.state.D2Digi}
                        changeToggle1={this.toggleD1}
                        checked={JSON.parse(localStorage.getItem('D1DIGI'))|| false}
                        checked1={JSON.parse(localStorage.getItem('D2DIGI'))|| false}
                        changeToggle2={this.toggleD2}
                        />
                             }
                        </>}
                        
                    </Container>
                    <div></div>
                </InnerDiv>
            </Main>
            <br/>
            <BottomContainer />
            </>
        );
    }
}

export default DigitalAnalog;
