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
        position: relative;
        right: 20px;
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

export const DigitalContainerForComponent = styled.div`
    position: relative;
    border: 1px solid #311b92;
    left: 8px;
    border-radius: 20px;
    background: linear-gradient(to right,  #311b92 40%,white 40%);
    color: white;
    width: 168px;
    display: flex;
    justify-content: space-around;
    padding: 12%;
    position: relative;
    top: 9px;

    @media (max-width: 776px){
        padding: 16px;
        padding-right: 11px;
    }
    @media (max-width: 666px){
        padding: 11px;
        padding-right: 0;
        right: 2px;
    }
    @media (max-width: 464px){
        padding: auto;
        transform: scale(0.9);
    }
`;

export const Left = styled.div`
    display: flex;
    flex-direction: column;
`;




