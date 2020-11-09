import React from 'react'
import Logo from '../img/logo.png'


const HeaderNav = () => {
    return(      
            <div className="header">
            <img src={Logo} width="40" alt="Logo"/>
            <h3 className="logo-name">Mirawork</h3>
            </div>
    );
}

export default HeaderNav;