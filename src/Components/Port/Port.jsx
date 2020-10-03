import React, { Component } from 'react';
import {MainContainer, 
ButtonBackground, 
ButtonDiv,
InputCheckBox,
BottomContainer,
InputLabel
} from './Port.style';
import Switch from "react-switch";
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
            D: false
        }
    }
    render() {
        // const {toggleButtonA1} = this.props;
        return (
            <div>
            <MainContainer>
                <ButtonDiv>
                <ButtonBackground>
                        <InputLabel>
                            A1
                            <InputCheckBox type="checkbox" 
                            checked={this.state.A1}
                            onChange={() => this.setState({A1: !this.state.A1}, 
                            () => console.log(this.state))}/>
                        </InputLabel>
                        <InputLabel>
                            A2
                            <InputCheckBox type="checkbox" 
                            checked={this.state.A2}
                            onChange={() => this.setState({A2: !this.state.A2}, 
                            () => console.log(this.state))}/>
                        </InputLabel>
                        <Switch type="checkbox" checkedIcon={false} uncheckedIcon={false}
                        checked={this.state.A1, this.state.A2, this.state.A}
                        onChange={() => this.setState({A1: !this.state.A1, A2: !this.state.A2, A: !this.state.A}, 
                        () => console.log(this.state))}/>
                    </ButtonBackground>
                    <ButtonBackground>
                        <InputLabel>
                            B1
                            <InputCheckBox type="checkbox" 
                            checked={this.state.B1}
                            onChange={() => this.setState({B1: !this.state.B1}, 
                            () => console.log(this.state))}/>
                        </InputLabel>
                        <InputLabel>
                            B2
                            <InputCheckBox type="checkbox" 
                            checked={this.state.B2}
                            onChange={() => this.setState({B2: !this.state.B2}, 
                            () => console.log(this.state))}/>
                        </InputLabel>
                        <Switch type="checkbox" checkedIcon={false} uncheckedIcon={false}
                        checked={this.state.B1, this.state.B2, this.state.B}
                        onChange={() => this.setState({B1: !this.state.B1, B2: !this.state.B2, B: !this.state.B}, 
                        () => console.log(this.state))}/>
                    </ButtonBackground>
                </ButtonDiv>

                <div className='center'>
                    <img src={process.env.PUBLIC_URL + '/images/login/illus_ace.png'}  alt="logo" width="280"/>
                </div>

                <div className='right'>
                    <ButtonBackground>
                        <InputLabel>
                            C1
                            <InputCheckBox type="checkbox" 
                            checked={this.state.C1}
                            onChange={() => this.setState({C1: !this.state.C1}, 
                            () => console.log(this.state))}/>
                        </InputLabel>
                        <InputLabel>
                            C2
                            <InputCheckBox type="checkbox" 
                            checked={this.state.C2}
                            onChange={() => this.setState({C2: !this.state.C2}, 
                            () => console.log(this.state))}/>
                        </InputLabel>
                        <Switch type="checkbox" checkedIcon={false} uncheckedIcon={false}
                        checked={this.state.C1, this.state.C2, this.state.C}
                        onChange={() => this.setState({C1: !this.state.C1, C2: !this.state.C2, C: !this.state.C},
                         () => console.log(this.state))}/>
                    </ButtonBackground>
                    <ButtonBackground>
                        <InputLabel>
                            D1
                            <InputCheckBox type="checkbox" 
                            checked={this.state.D1}
                            onChange={() => this.setState({D1: !this.state.D1}, 
                            () => console.log(this.state))}/>
                        </InputLabel>
                        <InputLabel>
                            D2
                            <InputCheckBox type="checkbox" 
                            checked={this.state.D2}
                            onChange={() => this.setState({D2: !this.state.D2}, 
                            () => console.log(this.state))}/>
                        </InputLabel>
                        <Switch type="checkbox" checkedIcon={false} uncheckedIcon={false}
                        checked={this.state.D1,this.state.D2, this.state.D}
                        onChange={() => this.setState({D1: !this.state.D1, D2: !this.state.D2, D: !this.state.D}, 
                        () => console.log(this.state))}/>
                    </ButtonBackground>
                </div>
                
            </MainContainer>
            <BottomContainer>
                <p>Description line 1</p>
                <br/>
                <p>Description line 2</p>
            </BottomContainer>
            </div>
            
        );
    }
}

// const mapDispatchToProps = (dispatch) => ({
//     toggleButtonA1: dispatch(toggleButtonA1())
// })

// export default withRouter(connect(null, mapDispatchToProps)(Port));
export default Port;
