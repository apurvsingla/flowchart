import React, { Component } from 'react';
import {BorderDiv} from './DigitalContainer.styles';
import SwitchButton from '../SwitchButton/SwitchButton.jsx';
import './DigitalContainer.scss';
class DigitalContainer extends Component {
    render() {
        return (
            <BorderDiv>
                <div className="digitalContainer upper-digital">
                    <label>{this.props.text}</label>
                    <SwitchButton 
                    disabled={false}
                    checked={false}
                    onChange={false}/>
                    <button className="pwm">PWM</button>
                    <button className="dac">DAC</button>
                </div>
                <div className="digitalContainer lower-digital">
                    <label>{this.props.children}</label>
                    <SwitchButton 
                    disabled={false}
                    checked={false}
                    onChange={false}/>
                    <button className="pwm">PWM</button>
                    <button className="dac">DAC</button>
                </div>
            </BorderDiv>
        );
    }
}

export default DigitalContainer;
