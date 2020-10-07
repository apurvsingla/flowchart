import styled from 'styled-components';

export const Main = styled.div`
    display: flex;
    justify-content: center;
`;

export const Container = styled.div`
    border: 1px solid blue;
    border-radius: 15px;
    padding: 15px;
    width: 70%;
    position: absolute;
    top:80%;
    @media (max-width: 724px) {
        margin-top: 5px;
    } 
    @media (max-width: 400px) {
       width: 85%;
    } 
`;