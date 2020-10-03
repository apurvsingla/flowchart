import React from 'react';
import {HeaderContainer, HeaderOptions, HeaderLinksContainer, HeaderWifiImage} from './Header.style';
import {withRouter} from 'react-router-dom';

const Header = (props) => {
    const isActive = props.location.pathname;
    console.log(isActive)
    return (
        <HeaderContainer>
            <HeaderOptions>
                <HeaderLinksContainer to="/">
                    Select ports
                </HeaderLinksContainer>
                <HeaderLinksContainer to="/input-output">
                    Inputs or Outputs
                </HeaderLinksContainer>
                <HeaderLinksContainer to="/digital-analog">
                    Digital or Analogs
                </HeaderLinksContainer>
                <HeaderLinksContainer to="/flowchart">
                FlowChart
                </HeaderLinksContainer>
                <HeaderWifiImage src={process.env.PUBLIC_URL + '/images/header/login_bluetooth_icon.png'}  alt="logo"/>
            </HeaderOptions>
        </HeaderContainer>
    );
}

export default withRouter(Header);
