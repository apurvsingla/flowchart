import React from 'react'
import {Container, Main, LeftButton, RightButton} from './BottomContainer.styles';
import {Redirect} from 'react-router-dom';

export default function BottomContainer(props) {
    // const nextActive = () => {
    //     const nextPost = [history.props()]
    // }
    // React.useEffect(() => {
    //     console.log(props.history)
        
    // }, []);
    return (
        <Main>
            <LeftButton>Prev</LeftButton>
        <Container>
            <p>Description line 1</p>
                <br/>
            <p>Description line 2</p>
        </Container>
        <RightButton>
             Next
        </RightButton>
        </Main>
    )
}
