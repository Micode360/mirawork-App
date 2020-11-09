import React from 'react'
import { Col} from 'react-bootstrap';
import { Link } from 'react-router-dom'


const OptionsNavbar = () => {
    return(
       
            <div className="userscreen-left-navbar">

            <Col style={{paddingTop:'20px',postion:'relative'}}>
                <div className="profile-img profile-img-resize"></div>
                <nav className="wall-navbar">
                <Link to='/' className="Nav-wall-Link" style={{display:'flex', flexDirection:"row"}}><i className="fa fa-tachometer" aria-hidden="true"></i> Darshboard</Link>
                    <Link to='/users' className="Nav-wall-Link"><i className="fa fa-users" aria-hidden="true"></i> Users</Link>
                    
                    <div className="bottom-navbar">
                        <Link to='/settings' className="Nav-wall-Link"><i className="fa fa-cog" aria-hidden="true"></i> Settings</Link>
                        <Link to='/logout' className="Nav-wall-Link"><i className="fa fa-sign-out" aria-hidden="true"></i> LogOut</Link>
                    </div>
                </nav>
            </Col>   


                    {/*         

        */}
            </div>
    );
}

export default OptionsNavbar;