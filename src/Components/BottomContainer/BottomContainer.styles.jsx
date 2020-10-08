import styled from 'styled-components';

export const Main = styled.div`
    display: flex;
    justify-content: center;
`;

export const Container = styled.div`
    border: 1px solid blue;
    border-radius: 15px;
    padding: 15px;
    width: 50%;
    position: absolute;
    top:80%;
    @media (max-width: 724px) {
        margin-top: 5px;
    } 
    @media (max-width: 644px) {
      width: 30%;
    } 
    @media (max-width: 644px) {
        width: 30%;
      } 
      @media (max-width: 409px) {
        font-size: 0.8rem;
      } 
`;

export const LeftButton = styled.button`
    position: absolute;
    top: 85%;
    right: 81%;
    padding: 5px;
    padding-right: 40px;
    padding-left: 40px;
    border-radius: 25px;
    outline: none;
    border: none;
    background-color: #311b92;
    color: white;
    font-size: 1.2rem;
    @media (max-width: 644px) {
        right: 70%;
        padding: 3px;
        padding-right: 30px;
        padding-left: 30px;
      } 
`;

export const RightButton = styled.button`
    position: absolute;
    top: 85%;
    left: 81%;
    padding: 5px;
    padding-right: 40px;
    padding-left: 40px;
    outline: none;
    border: none;
    border-radius: 25px;
    background-color: #311b92;
    color: white;
    font-size: 1.2rem;
    @media (max-width: 644px) {
        left: 70%;
      } 
`;
