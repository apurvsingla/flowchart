import React from 'react';
import {HeaderContainer,
    HeaderOptions, 
    HeaderLinksContainer,
     HeaderWifiImage,
      HeaderBackButton, 
      HeaderHelp} from './Header.style';
import {withRouter} from 'react-router-dom';
import './Header.scss';

const Header = () => {
    const [click, setClick] = React.useState(true)
    // const handleClick = (e) => {
    //     if(click){
    //         e.preventDefault();
    //     }
    // }
    return (
        <HeaderContainer>
            <HeaderOptions>
            <HeaderBackButton 
            // onClick={handleClick}
            src={process.env.PUBLIC_URL + '/images/login/login_button_back.png'} alt="back" width="90"/>
                <HeaderLinksContainer to="/" activeClassName='is-active' exact>
                    Select ports
                </HeaderLinksContainer>
                <HeaderLinksContainer 
                // onClick={handleClick}
                to="/input-output" activeClassName='is-active'>
                    Inputs or Outputs
                </HeaderLinksContainer>
                <HeaderLinksContainer
                // onClick={handleClick}
                to="/digital-analog" activeClassName='is-active'>
                    Digital or Analogs
                </HeaderLinksContainer>
                <HeaderLinksContainer 
                // onClick={handleClick}
                to="/flowchart" activeClassName='is-active'>
                FlowChart
                </HeaderLinksContainer>
                <HeaderWifiImage src={process.env.PUBLIC_URL + '/images/header/bluetooth_inactive.png'}  alt="logo"/>
                <HeaderHelp src={process.env.PUBLIC_URL + '/images/login/button_help.png'} alt="back" width="90"/>
            </HeaderOptions>
        </HeaderContainer>
    );
}

export default withRouter(Header);
