import React from 'react'
import { Col} from 'react-bootstrap';


const OptionsNavbar = () => {
    return(
       
            <div className="userscreen-left-navbar">

            <Col style={{paddingTop:'20px'}}>
                <div className="profile-img profile-img-resize"></div>
                <nav className="wall-navbar">
                    <a style={{display:'flex', flexDirection:"row"}}><i class="fa fa-tachometer" aria-hidden="true"></i> Darshboard</a>
                    <a><i class="fa fa-users" aria-hidden="true"></i> Users</a>
                    
                    <div className="bottom-navbar">
                        <a><i class="fa fa-cog" aria-hidden="true"></i> Settings</a>
                        <a><i class="fa fa-sign-out" aria-hidden="true"></i> LogOut</a>
                    </div>
                </nav>
            </Col>   


                    {/*         

        */}
            </div>
    );
}

export default OptionsNavbar;