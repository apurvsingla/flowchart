import styled from 'styled-components';

export const Main = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`;

export const InnerDiv = styled.div`
    display:flex;
    width: 70%;
    height: 300px;
    justify-content: space-around;

    @media (max-width: 600px){
        width: 90%;
    }
    @media (max-width: 400px){
        width: 100%;
    }
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    @media (max-width: 400px){
        width: 156px;
    }
    @media (max-width: 359px){
        width: 100px;
    }
`;



