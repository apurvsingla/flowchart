import React from 'react'
import {Container, Main, LeftButton, RightButton} from './BottomContainer.styles';
// import {Redirect} from 'react-router-dom';
import { useHistory } from 'react-router-dom';

export default function BottomContainer(props) {
    const history = useHistory();
    return (
        <Main>
            <LeftButton onClick={() => history.push(props.prev)}>
                Prev
            </LeftButton>
        <Container>
            <p>Description line 1</p>
                <br/>
            <p>Description line 2</p>
        </Container>
        <RightButton onClick={() => history.push(props.to)}>
             Next
        </RightButton>
        </Main>
    )
}
