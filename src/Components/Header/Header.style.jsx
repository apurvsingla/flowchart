import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 70px;
    padding: 15px;
    box-sizing: border-box;
`;

export const HeaderOptions = styled.div`
    display: block;
    box-sizing: border-box;
`;


export const HeaderLinksContainer = styled(NavLink)`
    margin-right: 4px;
    border: 1px solid blue;
    border-radius: 15px;
    text-decoration: none;
    border-top: none;
    padding: 22px;
    position: relative;
    top: -18px;
`;

export const HeaderWifiImage = styled.img`
    width: 30px;
    margin-left: 20px;
    &:hover {
        opacity: 0.8;
        cursor: pointer;
      }
`;

