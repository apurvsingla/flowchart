import React, { Component } from 'react';
import {BorderDiv, DigitalContainerForComponent, Left} from './DigitalContainer.styles';
import SwitchDigital from '../SwitchDigital/SwitchDigital.jsx';
import './DigitalContainer.scss';
class DigitalContainer extends Component {
    render() {
        let container = (<BorderDiv>
            <div className="digitalContainer upper-digital">
                <label>{this.props.text}</label>
                <SwitchDigital className="switch_button"
                disabled={this.props.disable1} 
                checked={this.props.checked || false} 
                changeToggle1={this.props.changeToggle1}/>
                <input className={this.props.checkedPWM1 + " pwm"}
                disabled={this.props.disable1}
                onClick={this.props.togglePWM1}
                value="PWM" type="button" />
                <input className={this.props.checkedDAC1 + " dac"}
                disabled={this.props.disable1}
                onClick={this.props.toggleDAC1}
                value="DAC" type="button" />
            </div>
            <span className="spanspace"></span>
            <div className="digitalContainer lower-digital">
                <label>{this.props.text1}</label>
                <SwitchDigital className="switch_button"
                disabled={this.props.disable2}  
                checked1={this.props.checked1 || false}
                changeToggle2={this.props.changeToggle2}/>
                <input className={this.props.checkedPWM2 + " pwm"}
                disabled={this.props.disable2}
                onClick={this.props.togglePWM2}
                value="PWM" type="button" />
                <input className={this.props.checkedDAC2 + " dac"}
                disabled={this.props.disable2}
                onClick={this.props.toggleDAC2}
                value="DAC" type="button" />
            </div>
        </BorderDiv>)
        let UART = (<DigitalContainerForComponent>
                    <Left>
                        <label>UART</label>
                        <input type="checkbox" className="circle" 
                        onChange={this.toggleUart}
                        checked={JSON.parse(localStorage.getItem('uart'))} />
                    </Left>
                    <div className="right-uart">
                        <p>B1 &rarr; TX</p>
                        <p>B2 &rarr; RX</p>
                    </div>
                </DigitalContainerForComponent>)
        if(this.props.uart){
            return(UART)
        }else{
            return(container)
        }
    }
}

export default DigitalContainer;
