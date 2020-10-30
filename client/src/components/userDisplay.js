import React from 'react'
import { Container,Row,Col,Card} from 'react-bootstrap';
import Logo from '../img/logo.png'


const UserScreen = () => {
    return (
        <div className="usersreen">
            <div className="header">
            <img src={Logo} width="40" alt="Logo"/>
            <h3 className="logo-name">Mirawork</h3>
                </div>
        <div className="userscreen-main">
        <Container>
        <Row style={{justifyContent:'center'}}>
        <Card className="profile-card">
           {/*<span className="active">Active</span>*/}
            <Card.Body className="userscreen-worker-container">
            <div className="profile-img"></div>
          <Card.Title>Helen Kathaway</Card.Title>
            <span className="profession" onSuspendCapture={{ color: 'rgba(129, 121, 121, 0.966)'}}>Software Engineer</span>
            <a className="profile-link">Profile</a>
            </Card.Body>
        </Card>

        <Card className="profile-card">
        {/*<span className="active">Active</span>*/}
         <Card.Body className="userscreen-worker-container">
         <div className="profile-img"></div>
       <Card.Title>Helen Kathaway</Card.Title>
         <span className="profession" onSuspendCapture={{ color: 'rgba(129, 121, 121, 0.966)'}}>Software Engineer</span>
         <a className="profile-link">Profile</a>
         </Card.Body>
     </Card>

     <Card className="profile-card">
     {/*<span className="active">Active</span>*/}
      <Card.Body className="userscreen-worker-container">
      <div className="profile-img"></div>
    <Card.Title>Helen Kathaway</Card.Title>
      <span className="profession" onSuspendCapture={{ color: 'rgba(129, 121, 121, 0.966)'}}>Software Engineer</span>
      <a className="profile-link">Profile</a>
      </Card.Body>
  </Card>

  <Card className="profile-card">
  {/*<span className="active">Active</span>*/}
   <Card.Body className="userscreen-worker-container">
   <div className="profile-img"></div>
 <Card.Title>Helen Kathaway</Card.Title>
   <span className="profession" onSuspendCapture={{ color: 'rgba(129, 121, 121, 0.966)'}}>Software Engineer</span>
   <a className="profile-link">Profile</a>
   </Card.Body>
</Card>

<Card className="profile-card">
{/*<span className="active">Active</span>*/}
 <Card.Body className="userscreen-worker-container">
 <div className="profile-img"></div>
<Card.Title>Helen Kathaway</Card.Title>
 <span className="profession" onSuspendCapture={{ color: 'rgba(129, 121, 121, 0.966)'}}>Software Engineer</span>
 <a className="profile-link">Profile</a>
 </Card.Body>
</Card>

<Card className="profile-card">
{/*<span className="active">Active</span>*/}
 <Card.Body className="userscreen-worker-container">
 <div className="profile-img"></div>
<Card.Title>Helen Kathaway</Card.Title>
 <span className="profession" onSuspendCapture={{ color: 'rgba(129, 121, 121, 0.966)'}}>Software Engineer</span>
 <a className="profile-link">Profile</a>
 </Card.Body>
</Card>
        </Row>
    </Container>
        </div>
        </div>
    );
}

export default UserScreen;