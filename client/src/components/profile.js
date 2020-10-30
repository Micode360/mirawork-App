import React from 'react';
import { Container,Row,Button,Col,Form } from 'react-bootstrap';
import Logo from '../img/logo.png'
//import uuid from 'react-uuid'



function ProfileComponent() {
 

  return (
      <div>
      {/*Form*/}
      <div xs lg={2} className="pad-wall">
            
          <form className="registeration-form" action="#">
          <Form.Label className="user-registeration">Registeration</Form.Label>
                <Form.Row>
                    
                <Form.Group as={Col} id="firstName">
                    <Form.Label>First  Name</Form.Label>
                      <Form.Control placeholder="First name" />
                      <Form.Text className="text-muted">
                       Fill in your first name
                      </Form.Text>
                      </Form.Group>
  
                      <Form.Group as={Col} id="lastName">
                        <Form.Label>Last Name</Form.Label>
                          <Form.Control placeholder="Last name" />
                          <Form.Text className="text-muted">
                          Fill in your last name
                          </Form.Text>
                      </Form.Group>
       
                  </Form.Row>

                  
                  <Form.Group id="gender">
                  <Form.Label>Gender</Form.Label>
                  <Form.Control as="select" defaultValue="Gender">
                    <option>Male</option>
                    <option>Female</option>
                  </Form.Control>
                  <Form.Text className="text-muted">
                       Fill in your gender
                      </Form.Text>
                  </Form.Group>


                  
                  <Form.Group id="age">
                      <Form.Label>Age</Form.Label>
                      <Form.Control type="number" placeholder="Age" />
                      <Form.Text className="text-muted">
                       Fill in your Age
                      </Form.Text>
                      </Form.Group>

                  
                  <Form.Group id="email">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                  <Form.Text className="text-muted">
                       Fill in your Email
                  </Form.Text>
                  </Form.Group>

                  <Form.Group controlId="formGridAddress1">
                    <Form.Label>Address</Form.Label>
                    <Form.Control placeholder="1234 Main St" />
                  </Form.Group>

                  <Form.Group controlId="formGridAddress2">
                    <Form.Label>Address 2</Form.Label>
                    <Form.Control placeholder="Apartment, studio, or floor" />
                  </Form.Group>

                  <Form.Row>
                    <Form.Group as={Col} controlId="formGridCity">
                      <Form.Label>City</Form.Label>
                      <Form.Control />
                      <Form.Text className="text-muted">
                          Fill in your city
                          </Form.Text>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                      <Form.Label>State</Form.Label>
                      <Form.Control as="select" defaultValue="Choose...">
                        <option>Choose...</option>
                        <option>...</option>
                      </Form.Control>
                      <Form.Text className="text-muted">
                          Fill in your state
                          </Form.Text>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                      <Form.Label>Zip</Form.Label>
                      <Form.Control />
                      <Form.Text className="text-muted">
                          Fill in your zip code
                          </Form.Text>
                    </Form.Group>
                  </Form.Row>

                  <Form.Label>Division</Form.Label>

                  <Form.Group id="division">
                      <Form.Control type="text" placeholder="division" />
                      <Form.Text className="text-muted">
                       Fill in your division
                      </Form.Text>
                      </Form.Group>
                
                    <Button className="submit" variant="outline-primary">Submit Form</Button>{' '}
                  
                  </form>

                  <div className="registeration-logo-div">
                      <div className="center-container">
                      <img src={Logo} width="200" height="200" alt="Logo"/>
                      <h2>MiraWork</h2>
                      </div>
                  </div>
            </div>
          </div>



  );
}

export default ProfileComponent;