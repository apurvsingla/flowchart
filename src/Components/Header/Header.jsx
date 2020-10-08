import React from 'react';
import {HeaderContainer,
    HeaderOptions, 
    HeaderLinksContainer,
     HeaderWifiImage,
      HeaderBackButton, 
      HeaderHelp} from './Header.style';
import {withRouter, useHistory} from 'react-router-dom';
import './Header.scss';

const Header = (props) => {
    const [click] = React.useState(true)
    const handleClick = (e) => {
        if(click){
            e.preventDefault();
        }
    }
   
    const history = useHistory();
    const back = () => {
        if(history.location.pathname === '/'){
            return(null)
        }else{
            history.goBack();
        }
    }
    return (
        <HeaderContainer>
            <HeaderOptions>
            <HeaderBackButton 
            onClick={back}
            src={process.env.PUBLIC_URL + '/images/login/login_button_back.png'} 
            alt="back" width="90"/>
                <HeaderLinksContainer to="/" 
                onClick={handleClick}
                activeClassName='is-active' exact>
                    Select ports
                </HeaderLinksContainer>
                <HeaderLinksContainer 
                onClick={handleClick}
                to="/input-output" activeClassName='is-active'>
                    Input or Output
                </HeaderLinksContainer>
                <HeaderLinksContainer
                onClick={handleClick}
                to="/digital-analog" activeClassName='is-active'>
                    Digital or Analog
                </HeaderLinksContainer>
                <HeaderLinksContainer 
                onClick={handleClick}
                to="/flowchart" activeClassName='is-active'>
                Flowchart
                </HeaderLinksContainer>
                <HeaderWifiImage src={process.env.PUBLIC_URL + '/images/header/bluetooth_inactive.png'}  alt="logo"/>
                <HeaderHelp src={process.env.PUBLIC_URL + '/images/login/button_help.png'} alt="back" width="90"/>
            </HeaderOptions>
        </HeaderContainer>
    );
}

export default withRouter(Header);
