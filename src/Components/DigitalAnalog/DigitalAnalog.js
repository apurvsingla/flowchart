import React, { Component } from 'react';
import {Main, InnerDiv, Container} from './DigitalAnalog.styles';
import BottomContainer from '../BottomContainer/BottomContainer';
import DigitalContainer from '../DigitalContainer/DigitalContainer';
class DigitalAnalog extends Component {
    render() {
        return (<>
            <Main>
                <InnerDiv>
                    <Container>
                        <DigitalContainer text="A1">
                            A2
                        </DigitalContainer>
                        <DigitalContainer text="B1">
                            B2
                        </DigitalContainer>
                    </Container>
                    <Container>
                        <DigitalContainer text="C1">
                            C2
                        </DigitalContainer>
                        <DigitalContainer text="D1">
                            D2
                        </DigitalContainer>
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
