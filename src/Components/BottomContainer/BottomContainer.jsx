import React from 'react'
import {Container, Main, LeftButton, RightButton} from './BottomContainer.styles';

export default function BottomContainer() {
    return (
        <Main>
            <LeftButton>Prev</LeftButton>
        <Container>
            <p>Description line 1</p>
                <br/>
            <p>Description line 2</p>
        </Container>
        <RightButton>Next</RightButton>
        </Main>
    )
}
