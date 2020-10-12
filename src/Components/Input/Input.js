import React, { Component } from 'react';
import {MainInputComponent} from './Input.styles';
import SwitchButton from '../SwitchButton/SwitchButton';
import BottomContainer from '../BottomContainer/BottomContainer';
import PopupMenu from '../Popup/Popup.jsx';
import './Input.styles.scss';

class InputOutput extends Component {
    constructor(props){
        super(props);
        const A1 = JSON.parse(localStorage.getItem('A1'));
        const A2 = JSON.parse(localStorage.getItem('A2'));
        const B1 = JSON.parse(localStorage.getItem('B1'));
        const B2 = JSON.parse(localStorage.getItem('B2'));
        const C1 = JSON.parse(localStorage.getItem('C1'));
        const C2 = JSON.parse(localStorage.getItem('C2'));
        const D1 = JSON.parse(localStorage.getItem('D1'));
        const D2 = JSON.parse(localStorage.getItem('D2'));
        this.state = {
            A1: A1|| false,
            A2: A2|| false,
            B1: B1|| false,
            B2: B2|| false,
            C1: C1|| false,
            C2: C2|| false,
            D1: D1|| false,
            D2: D2|| false,
            A1Checked: false,
            A2Checked: false,
            B1Checked: false,
            B2Checked: false,
            C1Checked: false,
            C2Checked: false,
            D1Checked: false,
            D2Checked: false,
            uart: false,
            sp: false,
            i2c: false,
            showPopupUart: false,
            showPopupSp1: false,
            showPopupI2c: false,
            spinner: false
        }
    }

    closeModalUart = () => {  
        this.setState({  
            showPopupUart: false  
        });  
    }  

    closeModalSp1 = () => {
        this.setState({
            showPopupSp1: false
        })
    }

    closeModalI2c = () => {
        this.setState({
            showPopupI2c: false
        })
    }

    activateModalUart = () =>{
        this.setState({uart: true, showPopupUart: false});
        localStorage.setItem('uart', !this.state.uart);
        this.closeModalUart();
    }
    
    deactivateModalUart = () => {
        this.setState({uart: false, showPopupUart: false});
        this.closeModalUart();
    }

    toggleUart = () =>{
        this.setState({uart: !this.state.uart, showPopupUart: false});
        localStorage.setItem('uart', !this.state.uart);
    }

    activateModalSp1 = () =>{
        this.setState({sp: true, showPopupSp1: false});
        localStorage.setItem('sp1', !this.state.sp)
        this.closeModalUart();
    }
    
    deactivateModalSp1 = () => {
        this.setState({sp: false, showPopupSp1: false});
        this.closeModalUart();
    }

    toggleSp1 = () =>{
        this.setState({sp: !this.state.sp, showPopupSp1: false});
        localStorage.setItem('sp1', !this.state.sp);
    }

    activateModalI2c = () =>{
        this.setState({i2c: true, showPopupI2c: false});
        localStorage.setItem('i2c', !this.state.i2c);
        this.closeModalUart();
    }
    
    deactivateModalI2c = () => {
        this.setState({i2c: false, showPopupI2c: false});
        this.closeModalUart();
    }

    toggleI2c = () => {
        this.setState({i2c: !this.state.i2c, showPopupSp1: false});
        localStorage.setItem('i2c', !this.state.i2c);
    }


    a1CheckedState = () => {
        this.setState({A1Checked: !this.state.A1Checked});
        localStorage.setItem("a1-I/O", !this.state.A1Checked);
    }

    b1CheckedState = () => {
        this.setState({B1Checked: !this.state.B1Checked});
        localStorage.setItem("b1-I/O", !this.state.B1Checked);
    }

    b2CheckedState = () => {
        this.setState({B2Checked: !this.state.B2Checked});
        localStorage.setItem("b2-I/O", !this.state.B2Checked);
    }


    d1CheckedState = () => {
        this.setState({D1Checked: !this.state.D1Checked});
        localStorage.setItem("d1-I/O", !this.state.D1Checked);
    }

    d2CheckedState = async () => {
        this.setState({D2Checked: !this.state.D2Checked});
        localStorage.setItem("d2-I/O", !this.state.D2Checked);
    }
    
    onSpiCircleClick = () => {
        if((this.state.C1 && this.state.C2) && (this.state.D1 && this.state.D2)){
            this.setState({showPopupSp1: !this.state.showPopupSp1});
        }
    }
    
    onUartCircleChange = () => {
        if(this.state.B1 && this.state.B2){
            this.setState({showPopupUart: !this.state.showPopupUart});
        }
    }

    onI2cCircleChange = () => {
        if(this.state.D1 && this.state.D2){
            this.setState({showPopupI2c: !this.state.showPopupI2c});
        }
    }

    render() {
        let buttonModal;
        let buttonModalSp1;
        let buttonModalI2c;
        let UART;
        let SP1;
        let I2c;

        //UART
        if(this.state.showPopupUart){
            buttonModal = (<PopupMenu 
                open={this.state.showPopupUart}
                close={this.closeModalUart}
                click={this.closeModalUart}
                onActivation={this.activateModalUart}
                onDeactivation={this.deactivateModalUart}
                    >
                  <span> Activating the UART protocol will enable the B port</span>
                    <br/>
                    <span>  Continue? </span>
                    <br/>
            </PopupMenu>)
        }
        if(JSON.parse(localStorage.getItem('uart'))){
            UART = (<div className="activatedUart">
                       <span> UART protocol activated</span>
                       <br/>
                        <input type="checkbox" className="circle arrangecircle" 
                        onChange={this.toggleUart}
                        checked={JSON.parse(localStorage.getItem('uart'))} />
                        {this.state.showPopupUart ? buttonModal : null}
                </div>)
        }else{
            UART = (<div className="left-lower">
            <div className={(this.state.B1 && this.state.B2) +"text-circle I2c uart"}>
                <label>
                    UART
                        <input type="checkbox" className="i2cinput extra-uart circle" 
                        disabled={!this.state.B1 && !this.state.B2} 
                        onChange={this.onUartCircleChange}
                        checked={this.state.uart} />
                        {this.state.showPopupUart ? buttonModal : null}
                </label>  
            </div>
            <label className={this.state.B1 +"input upper-label-input"}>
                                <span>
                                B1</span>
            <SwitchButton 
            disabled={!this.state.B1}
            checked={JSON.parse(localStorage.getItem('b1-I/O')) || this.state.B1Checked}
            onChange={this.b1CheckedState}
            />
            </label>
            <label className={this.state.B2 + "input lower-label-input input-bd"}>
               <span> B2</span>
                <SwitchButton 
                disabled={!this.state.B2}
                checked={JSON.parse(localStorage.getItem('b2-I/O')) || this.state.B2Checked}
                onChange={this.b2CheckedState}
                />
            </label>
        </div>)}

        //I2C
        if(this.state.showPopupI2c){
            buttonModalI2c = (<PopupMenu 
                open={this.state.showPopupI2c}
                close={this.closeModalI2c}
                click={this.closeModalI2c}
                onActivation={this.activateModalI2c}
                onDeactivation={this.deactivateModalI2c}
                    >
                   <span>Activating the I2C protocol will enable the D port</span>
                    <br/>
                  <span> Continue? </span>
                    <br/>
            </PopupMenu>)
        }


        if(JSON.parse(localStorage.getItem('i2c'))){
            I2c = (<div className="right-lower exLower">
            <div className="activatedI2c">
            <span> I2C protocol activated</span>
             <input type="checkbox" className="circle arrangecircleI2c"  
             onChange={this.toggleI2c}
             checked={JSON.parse(localStorage.getItem('i2c'))} />
             {this.state.showPopupI2c ? buttonModalI2c : null}
            </div>
        </div>)
        }

        // SP1 popup
        if(this.state.showPopupSp1){
            buttonModalSp1 = (<PopupMenu 
                open={this.state.showPopupSp1}
                close={this.closeModalSp1}
                click={this.closeModalSp1}
                onActivation={this.activateModalSp1}
                onDeactivation={this.deactivateModalSp1}
                    >
                  <span>  Activating the SPI protocol will enable the C and D ports </span>
                    <br/>
                    <span>  Continue?</span>
                    <br/>
            </PopupMenu>)
        }
        //sp1 activated
        if(JSON.parse(localStorage.getItem('sp1'))){
            SP1 = (<div className="activatedSp1">
            <span> SPI protocol activated</span>
            <br/>
             <input type="checkbox" 
             className="circle arrangecircleSp1" 
             checked={JSON.parse(localStorage.getItem('sp1'))}
             onChange={this.toggleSp1} />
             {this.state.showPopupSp1 ? buttonModalSp1 : null}
     </div>)
        }else{
            //sp1 code
            SP1 = (<>
            <div className={((this.state.C1 && this.state.C2)) +"text-circle sp"}>
            <label>SPI</label>
            <input type="checkbox" 
            className={(this.state.D1 && this.state.D2) +"text-circle i2cinput circle spicircle" }
            disabled={!(this.state.D2 || this.state.D1) && !(this.state.C1 && this.state.C2)}
            onChange={this.onSpiCircleClick}
            checked={this.state.sp} />
            {this.state.showPopupSp1 ? buttonModalSp1 : null}
        </div>
        <div className="right-upper">
            <label className={this.state.C1 + "input upper-label-input c"}>
                                <span>
                                C1</span>
                <SwitchButton 
                disabled={!this.state.C1}
                checked={this.state.C1Checked}
                onChange={() => true}
                />
            </label>
            <label className={this.state.C2 + "input lower-label-input input-bd"}>
               <span> C2</span>
                <SwitchButton 
                disabled={!this.state.C2}
                checked={this.state.C2Checked}
                onChange={() => true}
                />
            </label>
        </div>
        
           {JSON.parse(localStorage.getItem('i2c')) ? I2c : ( <>
            <div className="right-lower">
           <div className={(this.state.D1 && this.state.D2)+"text-circle I2c"}>
                <label>
                    I2C
                    <input type="checkbox" className="i2cinput circle" 
                    onChange={this.onI2cCircleChange}
                        disabled={!this.state.D1 && !this.state.D2} 
                    checked={this.state.i2c} />
                    {this.state.showPopupI2c ? buttonModalI2c : null}
                </label> 
            </div>
            <label className={this.state.D1 + "input upper-label-input lower"}>
                                <span>
                                D1</span>
                <SwitchButton
                disabled={!this.state.D1}
                checked={JSON.parse(localStorage.getItem('d1-I/O')) || this.state.D1Checked}
                onChange={this.d1CheckedState}
                />
            </label>
            <label className={this.state.D2 + "input lower-label-input input-left"}>
               <span> D2 </span>
                <SwitchButton className="ADSwitch"
                disabled={!this.state.D2}
                checked={JSON.parse(localStorage.getItem('d2-I/O')) || this.state.D2Checked}
                onChange={this.d2CheckedState}
                />
            </label>
            </div>
            </>)}
            
        </>)
        }

        return (
            <>
            <MainInputComponent>
                <div className="flex">
                    <div className="left">
                        <div className="left-upper">
                            <label className={this.state.A1 + "input upper-label-input"}>
                            <br/>
                                <span>
                                    A1
                                </span>
                                <SwitchButton  
                                disabled={!this.state.A1}
                                checked={JSON.parse(localStorage.getItem('a1-I/O')) || this.state.A1Checked}
                                onChange={this.a1CheckedState}/>
                            </label>
                            <label className={this.state.A2 +"input lower-label-input input-left"}>
                               <span> A2 </span>
                                <SwitchButton
                                disabled={!this.state.A2}
                                checked={JSON.parse(localStorage.getItem('a2-I/O')) || this.state.A2Checked}
                                onChange={() => true}
                                />
                            </label>
                        </div>
                        
                            {UART}
                            
                    </div>
                    <div className={JSON.parse(localStorage.getItem('sp1')) === true ? '' : 'right'}>
                        {SP1}
                    </div>
                </div>
            </MainInputComponent>
            <br/>
            <BottomContainer to="/digital-analog" prev="/"/>
            </>
        );
    }
}

export default InputOutput;
