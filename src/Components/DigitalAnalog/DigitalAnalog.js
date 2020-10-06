import React, { Component } from 'react';
import {Main, InnerDiv, Container, BorderDiv} from './DigitalAnalog.styles';
import BottomContainer from '../BottomContainer/BottomContainer';
import SwitchButton from '../SwitchButton/SwitchButton';
class DigitalAnalog extends Component {
    render() {
        return (<>
            <Main>
                <InnerDiv>
                    <Container>
                        <BorderDiv>
                            <label>A1</label>
                            <SwitchButton />
                            <span></span>
                        </BorderDiv>
                        <BorderDiv>awadadd</BorderDiv>
                    </Container>
                    <Container>
                        <BorderDiv>awqdqwdqwassssssssd</BorderDiv>
                        <BorderDiv>awadadd</BorderDiv>
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
