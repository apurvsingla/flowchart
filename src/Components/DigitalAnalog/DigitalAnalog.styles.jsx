import styled from 'styled-components';

export const Main = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    box-sizing: border-box;
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
`;

export const BorderDiv = styled.div`
    border: 1px solid #311b92;
    padding: 4%;
    border-radius: 20px;
    margin: 5%;
    background-color: white;
    color: #311b92;
    font-weight: 600;
    width: 100%;
`;


