import styled from 'styled-components';

export const Main = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    @media (min-height: 900px){
        position: relative;
        top: 200px;
    } 
`;

export const InnerDiv = styled.div`
    display:flex;
    width: 60%;
    height: 300px;
    justify-content: space-around;

    @media (max-width: 400px){
        width: 100%;
        position: relative;
        right: 10px;
    }
    @media (max-width: 359px){
        right: 25px;
    }
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    transform: scale(1.2);
    @media (max-width: 810px){
        transform: scale(1.15);
    }
    @media (max-width: 733px){
        transform: scale(1.1);
    }
    @media (max-width: 400px){
        width: 156px;
        transform: scale(1);
    }
    @media (max-width: 359px){
        width: 100px;
    }
    @media (min-height: 900px){
        padding: 70px;
        padding-top: 0;
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
        top: 50px;
    }
    
`;

export const Left = styled.div`
    display: flex;
    flex-direction: column;
`;




