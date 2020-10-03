import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderContainer = styled.div`
    text-align:center;
    width: 100%;
    margin-bottom: 70px;
    padding: 12px;
    box-sizing: border-box;
    @media (max-width: 768px) {
        padding: 5px;
        transform: scale(0.8);
        margin-bottom: 0;
    }
    @media (max-width: 624px) {
        transform: scale(0.7);
    }
    @media (max-width: 500px){
        transform: scale(0.6);
    }  
    @media (max-width: 438px){
        transform: scale(0.53);
    }  
    @media (max-width: 368px){
        transform: scale(0.45);
    }  
    
`;

export const HeaderOptions = styled.div`
   display: flex;
   justify-content: center;
   
`;


export const HeaderLinksContainer = styled(NavLink)`
    margin-right: 4px;
    border: 1px solid #311b92;
    border-radius: 15px;
    text-decoration: none;
    padding: 45px 28px 20px 28px;
    position: relative;
    top: -48px;
    @media (max-width: 520px){
        top: -65px;
    } 
    @media (max-width: 450px){
        top: -110px;
    }   
`;

export const HeaderWifiImage = styled.img`
    width: 4rem;
    position: relative;
    top: -45px;
    border: 1px solid #311b92;
    padding: 7px;
    border-radius: 50px;
    &:hover {
        opacity: 0.8;
        cursor: pointer;
      }
    @media (max-width: 768px) {
        width: 70px;
    }
    @media (max-width: 520px){
        top: -65px;
    }  
    @media (max-width: 450px){
        top: -110px;
    }   
`;

export const HeaderBackButton = styled.img`
    display: inline-block;
    &:hover {
        opacity: 0.8;
        cursor: pointer;
    }
`;

export const HeaderHelp = styled.img`
    display: inline-block;
    &:hover {
        opacity: 0.8;
        cursor: pointer;
    }
`;

