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
            A1: false,
            A2: false,
            A: false,
            B1: false,
            B2: false,
            B: false,
            C1: false,
            C2: false,
            C: false,
            D1: false,
            D2: false,
            D: false,
        }
    }

    onA1ValueChange = () => {
        this.setState({A1: !this.state.A1});
        localStorage.setItem('A1', this.state.A1)
    }
    onA2ValueChange = () => {
        this.setState({A2: !this.state.A2});
        localStorage.setItem('A2', this.state.A2)
    }
    onAValueChange = () => {
        this.setState({A1: !this.state.A1, A2: !this.state.A2,A: !this.state.A});
        localStorage.setItem('A', this.state.A);
        localStorage.setItem('A1', this.state.A1);
        localStorage.setItem('A2', this.state.A2);
    }
    onB1ValueChange = () => {
        this.setState({B1: !this.state.B1});
        localStorage.setItem('B1', this.state.B1)
    }
    onB2ValueChange = () => {
        this.setState({B2: !this.state.B2});
        localStorage.setItem('B2', this.state.B2)
    }
    onBValueChange = () => {
        this.setState({B1: !this.state.B1, B2: !this.state.B2,B: !this.state.B});
        localStorage.setItem('B', this.state.B);
        localStorage.setItem('B1', this.state.B1);
        localStorage.setItem('B2', this.state.B2);
    }
    onC1ValueChange = () => {
        this.setState({C1: !this.state.C1});
        localStorage.setItem('C1', this.state.C1)
    }
    onC2ValueChange = () => {
        this.setState({C2: !this.state.C2});
        localStorage.setItem('C2', this.state.C2)
    }
    onCValueChange = () => {
        this.setState({C1: !this.state.C1, C2: !this.state.C2,C: !this.state.C});
        localStorage.setItem('C', this.state.C);
        localStorage.setItem('C1', this.state.C1);
        localStorage.setItem('C2', this.state.C2);
    }
    onD1ValueChange = () => {
        this.setState({D1: !this.state.D1});
        localStorage.setItem('D1', this.state.D1)
    }
    onD2ValueChange = () => {
        this.setState({D2: !this.state.D2});
        localStorage.setItem('D2', this.state.D2)
    }
    onDValueChange = () => {
        this.setState({D1: !this.state.D1, D2: !this.state.D2,D: !this.state.D});
        localStorage.setItem('D', this.state.D);
        localStorage.setItem('D1', this.state.D1);
        localStorage.setItem('D2', this.state.D2);
    }
    render() {   
        return (
            <div>
            <MainContainer>
                <ButtonDiv>
                <ButtonBackground>
                        <InputLabel>
                            A1
                            <InputCheckBox type="checkbox" 
                            checked={JSON.parse(localStorage.getItem('A1'))}
                            onChange={() => this.onA1ValueChange()}/>
                        </InputLabel>
                        <InputLabel>
                            A2
                            <InputCheckBox type="checkbox" 
                            checked={JSON.parse(localStorage.getItem('A2'))}
                            onChange={() => this.onA2ValueChange()}/>
                        </InputLabel>
                        <SwitchButton type="checkbox" 
                        checkedIcon={false} 
                        uncheckedIcon={false}
                        checked={JSON.parse(localStorage.getItem('A'))}
                        onChange={() => this.onAValueChange()}
                        height={20}
                        handleDiameter={18}/>
                    </ButtonBackground>
                    <ButtonBackground>
                        <InputLabel>
                            B1
                            <InputCheckBox type="checkbox" 
                            checked={JSON.parse(localStorage.getItem('B1'))}
                            onChange={() => this.onB1ValueChange()}/>
                        </InputLabel>
                        <InputLabel>
                            B2
                            <InputCheckBox type="checkbox" 
                            checked={JSON.parse(localStorage.getItem('B2'))}
                            onChange={() => this.onB2ValueChange()}/>
                        </InputLabel>
                        <SwitchButton type="checkbox" checkedIcon={false} uncheckedIcon={false}
                        checked={JSON.parse(localStorage.getItem('B'))}
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
                            checked={JSON.parse(localStorage.getItem('C1'))}
                            onChange={() => this.onC1ValueChange()}/>
                        </InputLabel>
                        <InputLabel>
                            C2
                            <InputCheckBox type="checkbox" 
                            checked={JSON.parse(localStorage.getItem('C2'))}
                            onChange={() => this.onC2ValueChange()}/>
                        </InputLabel>
                        <SwitchButton type="checkbox" checkedIcon={false} uncheckedIcon={false}
                        checked={JSON.parse(localStorage.getItem('C'))}
                        onChange={() => this.onCValueChange()}
                            height={20}
                            handleDiameter={18}/>
                    </ButtonBackground>
                    <ButtonBackground>
                        <InputLabel>
                            D1
                            <InputCheckBox type="checkbox" 
                            checked={JSON.parse(localStorage.getItem('D1'))}
                            onChange={() => this.onD1ValueChange()}/>
                        </InputLabel>
                        <InputLabel>
                            D2
                            <InputCheckBox type="checkbox" 
                            checked={JSON.parse(localStorage.getItem('D2'))}
                            onChange={() => this.onD2ValueChange()}/>
                        </InputLabel>
                        <SwitchButton type="checkbox" checkedIcon={false} uncheckedIcon={false}
                        checked={JSON.parse(localStorage.getItem('D'))}
                        onChange={() => this.onDValueChange()}
                        height={20}
                        handleDiameter={18}/>
                    </ButtonBackground>
                </div>
                
            </MainContainer>
            <br/>
            <BottomContainer />
            </div>
            
        );
    }
}

// const mapDispatchToProps = (dispatch) => ({
//     toggleButtonA1: dispatch(toggleButtonA1())
// })

// export default withRouter(connect(null, mapDispatchToProps)(Port));
export default Port;
