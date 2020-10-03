import React from 'react';
import {HeaderContainer, HeaderOptions, HeaderLinksContainer, HeaderWifiImage} from './Header.style';
import {withRouter} from 'react-router-dom';
import './Header.scss';

const Header = (props) => {
    const isActive = props.location.pathname;
    return (
        <HeaderContainer>
            <HeaderOptions>
                <HeaderLinksContainer to="/" activeClassName='is-active' exact >
                    Select ports
                </HeaderLinksContainer>
                <HeaderLinksContainer to="/input-output" activeClassName='is-active'>
                    Inputs or Outputs
                </HeaderLinksContainer>
                <HeaderLinksContainer to="/digital-analog" activeClassName='is-active'>
                    Digital or Analogs
                </HeaderLinksContainer>
                <HeaderLinksContainer to="/flowchart" activeClassName='is-active'>
                FlowChart
                </HeaderLinksContainer>
                <HeaderWifiImage src={process.env.PUBLIC_URL + '/images/header/login_bluetooth_icon.png'}  alt="logo"/>
            </HeaderOptions>
        </HeaderContainer>
    );
}

export default withRouter(Header);
