import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderContainer = styled.div`
    text-align:center;
    margin-bottom: 70px;
    padding: 12px;
    @media (max-width: 768px) {
        padding: 5px;
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

