import React from 'react'
//import { Container,Row,Col,Card} from 'react-bootstrap';
import HeaderNav from './header';
import EmployeesContainer from './UserScreenMain'
import OptionsNavbar from './navbar'

const UserScreen = () => {
    return (
      <div className="usersreen">
          <OptionsNavbar/>
          <HeaderNav/>
          <EmployeesContainer/>
        </div>
    );
}

export default UserScreen;