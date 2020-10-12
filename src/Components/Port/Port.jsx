import React, { Component } from 'react';
import {MainContainer, 
ButtonBackground, 
ButtonDiv,
InputCheckBox,
InputLabel,
SwitchButton
} from './Port.style';
import BottomContainer from '../BottomContainer/BottomContainer';
// import { connect } from 'react-redux';
// import { createStructuredSelector } from 'reselect';
// import { withRouter } from 'react-router-dom';
// import {toggleButtonA1} from '../../redux/ports/port.action';

class Port extends Component {
    constructor(){
        super();
        this.state = {
            A1: localStorage.getItem('A1') || false,
            A2: localStorage.getItem('A2') || false,
            A: localStorage.getItem('A') || false,
            B1: localStorage.getItem('B1') || false,
            B2: localStorage.getItem('B2') || false,
            B: localStorage.getItem('B') || false,
            C1: localStorage.getItem('C1') || false,
            C2: localStorage.getItem('C2') || false,
            C: localStorage.getItem('C') || false,
            D1: localStorage.getItem('D1') || false,
            D2: localStorage.getItem('D2') || false,
            D: localStorage.getItem('D') || false,
        }
    }

    componentWillMount() {
        this.setState({A: !this.state.A});
        this.setState({A1: !this.state.A1});
        this.setState({A2: !this.state.A2});  
        
        this.setState({B: !this.state.B});
        this.setState({B1: !this.state.B1});
        this.setState({B2: !this.state.B2});

        this.setState({C: !this.state.C});
        this.setState({C1: !this.state.C1});
        this.setState({C2: !this.state.C2});

        this.setState({D: !this.state.D});
        this.setState({D1: !this.state.D1});
        this.setState({D2: !this.state.D2});
      }

    componentDidMount(){
        this.setState({A: false});
        this.setState({A1: false});
        this.setState({A2: false});  
        
        this.setState({B: false});
        this.setState({B1: false});
        this.setState({B2: false});

        this.setState({C: false});
        this.setState({C1: false});
        this.setState({C2: false});

        this.setState({D: false});
        this.setState({D1: false});
        this.setState({D2: false});
    }
      

    onA1ValueChange = () => {
        this.setState({A1: !this.state.A1});
        localStorage.setItem('A1', !this.state.A1);
        if(((JSON.parse(localStorage.getItem('A1')) && JSON.parse(localStorage.getItem('A2')))) === true){
            this.setState({A: true})
            localStorage.setItem('A', true);
        }
        if(JSON.parse(localStorage.getItem('A1')) === false){
            localStorage.setItem('A', false);
        }
    }
    onA2ValueChange = () => {
        this.setState({A2: !this.state.A2});
        localStorage.setItem('A2', !this.state.A2);
        if(((JSON.parse(localStorage.getItem('A1')) && JSON.parse(localStorage.getItem('A2')))) === true){
            this.setState({A: true})
            localStorage.setItem('A', true);
        }
        if(JSON.parse(localStorage.getItem('A2')) === false){
            localStorage.setItem('A', false);
        }
    }
    onAValueChange = () => {
        this.setState({A1: !this.state.A1, A2: !this.state.A2,A: !this.state.A});
        localStorage.setItem('A', !this.state.A);
        localStorage.setItem('A1', !this.state.A);
        localStorage.setItem('A2', !this.state.A);
    }
    onB1ValueChange = () => {
        this.setState({B1: !this.state.B1});
        localStorage.setItem('B1', !this.state.B1);
        if(((JSON.parse(localStorage.getItem('B1')) && JSON.parse(localStorage.getItem('B2')))) === true){
            this.setState({B: true})
            localStorage.setItem('B', true);
        }
        if(JSON.parse(localStorage.getItem('B1')) === false){
            localStorage.setItem('B', false);
        }
    }
    onB2ValueChange = () => {
        this.setState({B2: !this.state.B2});
        localStorage.setItem('B2', !this.state.B2);
        if(((JSON.parse(localStorage.getItem('B1')) && JSON.parse(localStorage.getItem('B2')))) === true){
            this.setState({B: true})
            localStorage.setItem('B', true);
        }
        if(JSON.parse(localStorage.getItem('B2')) === false){
            localStorage.setItem('B', false);
        }
    }
    onBValueChange = () => {
        this.setState({B1: !this.state.B1, B2: !this.state.B2,B: !this.state.B});
        localStorage.setItem('B', !this.state.B);
        localStorage.setItem('B1', !this.state.B);
        localStorage.setItem('B2', !this.state.B);
    }
    onC1ValueChange = () => {
        this.setState({C1: !this.state.C1});
        localStorage.setItem('C1', !this.state.C1);
        if(((JSON.parse(localStorage.getItem('C1')) && JSON.parse(localStorage.getItem('C2')))) === true){
            this.setState({C: true})
            localStorage.setItem('C', true);
        }
        if(JSON.parse(localStorage.getItem('C1')) === false){
            localStorage.setItem('C', false);
        }
    }
    onC2ValueChange = () => {
        this.setState({C2: !this.state.C2});
        localStorage.setItem('C2', !this.state.C2);
        if(((JSON.parse(localStorage.getItem('C1')) && JSON.parse(localStorage.getItem('C2')))) === true){
            this.setState({C: true})
            localStorage.setItem('C', true);
        }
        if(JSON.parse(localStorage.getItem('C2')) === false){
            localStorage.setItem('C', false);
        }
    }
    onCValueChange = () => {
        this.setState({C1: !this.state.C1, C2: !this.state.C2,C: !this.state.C});
        localStorage.setItem('C', !this.state.C);
        localStorage.setItem('C1', !this.state.C);
        localStorage.setItem('C2', !this.state.C);
    }
    onD1ValueChange = () => {
        this.setState({D1: !this.state.D1});
        localStorage.setItem('D1', !this.state.D1);
        if(((JSON.parse(localStorage.getItem('D1')) && JSON.parse(localStorage.getItem('D2')))) === true){
            this.setState({D: true})
            localStorage.setItem('D', true);
        }
        if(JSON.parse(localStorage.getItem('D1')) === false){
            localStorage.setItem('D', false);
        }
    }
    onD2ValueChange = () => {
        this.setState({D2: !this.state.D2});
        localStorage.setItem('D2', !this.state.D2);
        if(((JSON.parse(localStorage.getItem('D1')) && JSON.parse(localStorage.getItem('D2')))) === true){
            this.setState({D: true});
            localStorage.setItem('D', !true);
        }
        if(JSON.parse(localStorage.getItem('D2')) === false){
            localStorage.setItem('D', false);
        }
    }
    onDValueChange = () => {
        this.setState({D1: !this.state.D1, D2: !this.state.D2,D: !this.state.D});
        localStorage.setItem('D', !this.state.D);
        localStorage.setItem('D1', !this.state.D);
        localStorage.setItem('D2', !this.state.D);
    }
    
    render() {   
        return (
            <>
            <MainContainer>
                <ButtonDiv>
                <ButtonBackground>
                        <InputLabel>
                            A1
                            <InputCheckBox type="checkbox" 
                            checked={JSON.parse(localStorage.getItem('A1')) || false}
                            onChange={() => this.onA1ValueChange()}/>
                        </InputLabel>
                        <InputLabel>
                            A2
                            <InputCheckBox type="checkbox" 
                            checked={JSON.parse(localStorage.getItem('A2')) || false}
                            onChange={() => this.onA2ValueChange()}/>
                        </InputLabel>
                        <SwitchButton type="checkbox" 
                        checkedIcon={false} 
                        uncheckedIcon={false}
                        checked={JSON.parse(localStorage.getItem('A')) || false}
                        onChange={() => this.onAValueChange()}
                        height={20}
                        handleDiameter={18}/>
                    </ButtonBackground>
                    <ButtonBackground>
                        <InputLabel>
                            B1
                            <InputCheckBox type="checkbox" 
                            checked={JSON.parse(localStorage.getItem('B1')) || false}
                            onChange={() => this.onB1ValueChange()}/>
                        </InputLabel>
                        <InputLabel>
                            B2
                            <InputCheckBox type="checkbox" 
                            checked={JSON.parse(localStorage.getItem('B2')) || false}
                            onChange={() => this.onB2ValueChange()}/>
                        </InputLabel>
                        <SwitchButton type="checkbox" checkedIcon={false} uncheckedIcon={false}
                        checked={JSON.parse(localStorage.getItem('B')) || false}
                        onChange={() => this.onBValueChange()}
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
                            onChange={() => this.onC1ValueChange()}/>
                        </InputLabel>
                        <InputLabel>
                            C2
                            <InputCheckBox type="checkbox" 
                            checked={JSON.parse(localStorage.getItem('C2')) || false}
                            onChange={() => this.onC2ValueChange()}/>
                        </InputLabel>
                        <SwitchButton type="checkbox" checkedIcon={false} uncheckedIcon={false}
                        checked={JSON.parse(localStorage.getItem('C')) || false}
                        onChange={() => this.onCValueChange()}
                            height={20}
                            handleDiameter={18}/>
                    </ButtonBackground>
                    <ButtonBackground>
                        <InputLabel>
                            D1
                            <InputCheckBox type="checkbox" 
                            checked={JSON.parse(localStorage.getItem('D1')) || false}
                            onChange={() => this.onD1ValueChange()}/>
                        </InputLabel>
                        <InputLabel>
                            D2
                            <InputCheckBox type="checkbox" 
                            checked={JSON.parse(localStorage.getItem('D2')) || false}
                            onChange={() => this.onD2ValueChange()}/>
                        </InputLabel>
                        <SwitchButton type="checkbox" checkedIcon={false} uncheckedIcon={false}
                        checked={JSON.parse(localStorage.getItem('D')) || false}
                        onChange={() => this.onDValueChange()}
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
}

// const mapDispatchToProps = (dispatch) => ({
//     toggleButtonA1: dispatch(toggleButtonA1())
// })

// export default withRouter(connect(null, mapDispatchToProps)(Port));
export default Port;
