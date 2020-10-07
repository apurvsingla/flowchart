import React, { Component } from 'react';
import {MainInputComponent} from './Input.styles';
import SwitchButton from '../SwitchButton/SwitchButton';
import BottomContainer from '../BottomContainer/BottomContainer';
import PopupMenu from '../Popup/Popup.jsx';
import './Input.styles.scss';


class InputOutput extends Component {
    constructor(props){
        super(props);
        let A1 = JSON.parse(localStorage.getItem('A1'));
        let A2 = JSON.parse(localStorage.getItem('A2'));
        let B1 = JSON.parse(localStorage.getItem('B1'));
        let B2 = JSON.parse(localStorage.getItem('B2'));
        let C1 = JSON.parse(localStorage.getItem('C1'));
        let C2 = JSON.parse(localStorage.getItem('C2'));
        let D1 = JSON.parse(localStorage.getItem('D1'));
        let D2 = JSON.parse(localStorage.getItem('D2'));
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

    activateModalUart= () =>{
        this.setState({uart: true, showPopupUart: false});
        localStorage.setItem('uart', !this.state.uart)
        this.closeModalUart();
    }
    
    deactivateModalUart = () => {
        this.setState({uart: false, showPopupUart: false});
        this.closeModalUart();
    }

    toggleUart = () =>{
        this.setState({uart: !this.state.uart, showPopupUart: false});
        localStorage.setItem('uart', !this.state.uart)
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
        localStorage.setItem('sp1', !this.state.sp)
    }

    activateModalI2c = () =>{
        this.setState({i2c: true, showPopupI2c: false});
        localStorage.setItem('i2c', !this.state.i2c)
        this.closeModalUart();
    }
    
    deactivateModalI2c = () => {
        this.setState({i2c: false, showPopupI2c: false});
        this.closeModalUart();
    }

    toggleI2c = () => {
        this.setState({i2c: !this.state.i2c, showPopupSp1: false});
        localStorage.setItem('i2c', !this.state.i2c)
    }

    a1CheckedState = () => {
        this.setState({A1Checked: !this.state.A1Checked})
        localStorage.setItem("a1-I/O", this.state.A1Checked);
    }

    a2CheckedState = () => {
        this.setState({A2Checked: !this.state.A2Checked})
        localStorage.setItem("a2-I/O", this.state.A2Checked);
    }

    b1CheckedState = () => {
        this.setState({B1Checked: !this.state.B1Checked})
        localStorage.setItem("b1-I/O", this.state.B1Checked);
    }

    b2CheckedState = () => {
        this.setState({B2Checked: !this.state.B2Checked})
        localStorage.setItem("b2-I/O", this.state.B2Checked);
    }

    c1CheckedState = () => {
        this.setState({C1Checked: !this.state.C1Checked})
        localStorage.setItem("c1-I/O", this.state.C1Checked);
    }

    c2CheckedState = () => {
        this.setState({C2Checked: !this.state.C2Checked})
        localStorage.setItem("c2-I/O", this.state.C2Checked);
    }

    d1CheckedState = () => {
        this.setState({D1Checked: !this.state.D1Checked})
        localStorage.setItem("d1-I/O", this.state.D1Checked);
    }

    d2CheckedState = () => {
        this.setState({D2Checked: !this.state.D2Checked})
        localStorage.setItem("d2-I/O", this.state.D2Checked);
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
                        <input type="checkbox" className="circle arrangecircle" 
                        onChange={this.toggleUart}
                        checked={JSON.parse(localStorage.getItem('uart'))} />
                        {this.state.showPopupUart ? buttonModal : null}
                </div>)
        }else{
            UART = (<div className="left-lower">
            <div className="I2c uart">
                <label>
                    UART
                    <div>
                        <input type="checkbox" className="i2cinput circle" 
                        onChange={() => 
                            this.setState({showPopupUart: !this.state.showPopupUart}, 
                            () => console.log(this.state.showPopupUart))}
                        checked={this.state.uart} />
                        {this.state.showPopupUart ? buttonModal : null}
                    </div>
                </label>  
            </div>
            <label className="upper-label-input">
                                <span>
                                B1</span>
            <SwitchButton 
            disabled={!this.state.B1}
            checked={JSON.parse(localStorage.getItem('b1-I/O')) || false}
            onChange={this.b1CheckedState}
            />
            </label>
            <label className="lower-label-input">
                B2
                <SwitchButton 
                disabled={!this.state.B2}
                checked={JSON.parse(localStorage.getItem('b2-I/O')) || false}
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
                  <span>  Activating the Sp1 protocol will enable the C and D ports </span>
                    <br/>
                    <span>  Continue?</span>
                    <br/>
            </PopupMenu>)
        }
        //sp1 activated
        if(JSON.parse(localStorage.getItem('sp1'))){
            SP1 = (<div className="activatedSp1">
            <span> Sp1 protocol activated</span>
             <input type="checkbox" 
             className="circle arrangecircleSp1" 
             checked={JSON.parse(localStorage.getItem('sp1'))}
             onChange={this.toggleSp1} />
             {this.state.showPopupSp1 ? buttonModalSp1 : null}
     </div>)
        }else{
            //sp1 code
            SP1 = (<>
            <div className="sp">
            <label>Sp1</label>
            <input type="checkbox" className="i2cinput circle" 
                        onChange={() => 
                            this.setState({showPopupSp1: !this.state.showPopupSp1}, 
                            () => console.log(this.state))}
                        checked={this.state.sp} />
                        {this.state.showPopupSp1 ? buttonModalSp1 : null}
        </div>
        <div className="right-upper">
            <label className="upper-label-input">
                                <span>
                                C1</span>
                <SwitchButton 
                disabled={!this.state.C1}
                checked={JSON.parse(localStorage.getItem('c1-I/O')) || false}
                onChange={this.c1CheckedState}
                />
            </label>
            <label className="lower-label-input">
                C2
                <SwitchButton 
                disabled={!this.state.C2}
                checked={JSON.parse(localStorage.getItem('c2-I/O')) || false}
                onChange={this.c2CheckedState}
                />
            </label>
        </div>
        
           {JSON.parse(localStorage.getItem('i2c')) ? I2c : ( <>
            <div className="right-lower">
           <div className="I2c">
                <label>
                    I2C
                    <input type="checkbox" className="i2cinput circle" 
                    onChange={() => 
                        this.setState({showPopupI2c: !this.state.showPopupI2c}, 
                        () => console.log({I2C: this.state.i2c}))}
                    checked={this.state.i2c} />
                    {this.state.showPopupI2c ? buttonModalI2c : null}
                </label> 
            </div>
            <label className="upper-label-input">
                                <span>
                                A1</span>
                <SwitchButton
                disabled={!this.state.D1}
                checked={JSON.parse(localStorage.getItem('d1-I/O')) || false}
                onChange={this.d1CheckedState}
                />
            </label>
            <label className="lower-label-input">
                D2
                <SwitchButton
                disabled={!this.state.D2}
                checked={JSON.parse(localStorage.getItem('d2-I/O')) || false}
                onChange={this.d2CheckedState}
                />
            </label>
            </div>
            </>)}
            
        </>)
        }

        return (
            <div>
            <MainInputComponent>
                <div className="flex">
                    <div className="left">
                        <div className="left-upper">
                            <label className="upper-label-input">
                                <span>
                                A1</span>
                                <SwitchButton  
                                disabled={!this.state.A1}
                                checked={JSON.parse(localStorage.getItem('a1-I/O')) || false}
                                onChange={this.a1CheckedState}/>
                            </label>
                            <label className="lower-label-input">
                                A2
                                <SwitchButton
                                checked={this.state.A2Checked}
                                checked={JSON.parse(localStorage.getItem('a2-I/O')) || false}
                                onChange={this.a2CheckedState}
                                />
                            </label>
                        </div>
                        
                            {UART}
                            
                    </div>
                    <div className="right">
                        {SP1}
                    </div>
                </div>
            </MainInputComponent>
            <br/>
            <BottomContainer />
            </div>
        );
    }
}

export default InputOutput;
