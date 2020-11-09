import React from 'react'
import { Container,Row,Card} from 'react-bootstrap';


const EmployeesContainer = () => {
    return (
        <div className="userscreen-main">
        <Container>
        <Row style={{justifyContent:'center'}}>
        <Card className="profile-card">
           {/*<span className="active">Active</span>*/}
            <Card.Body className="userscreen-worker-container">
            <div className="profile-img"></div>
          <Card.Title>Helen Kathaway</Card.Title>
            <span className="profession" style={{ color: 'rgba(129, 121, 121, 0.966)'}}>Software Engineer</span>
            <a className="profile-link">Profile</a>
            </Card.Body>
        </Card>
        </Row>
    </Container>
        </div>
    );
}

export default EmployeesContainer;