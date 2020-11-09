import React from 'react'
import HeaderNav from './header';
import OptionsNavbar from './navbar'
import { Container,Row,Col} from 'react-bootstrap';
import '../darshboard.css'

const Home = () => {
    return(      
            <div className="home" style={{color:'#333'}}>
                    <OptionsNavbar/>
                    <HeaderNav/>
                    <Container className="darsboard-intro" fluid="md">
                        <Row className="user-greeting-container carton">
                            <Col className="carton ">Hello Helen Kathaway</Col>
                        </Row>

                        <Row>
                        <Col sm={8}>
                        <Row  className="headlines">
                                <Col className="carton" sm>You have 0 people in your group</Col>
                                <Col className="carton" sm>Influence</Col>
                       
                    </Row>
                        </Col>
                        <Col className="groups" sm={4}>Groups</Col>
                      </Row>
                      
                        </Container>

                            


                    {/**/}
            </div>
    );
}

export default Home;