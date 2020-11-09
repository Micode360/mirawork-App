import React, {  useState } from 'react';
import { Col,Form } from 'react-bootstrap';
//import Logo from '../../img/logo.png'
import { Link } from 'react-router-dom'
import  axios  from 'axios'



    function SignUp (){
      const [user, setUser] = useState({
          firstName:'',
          lastName:'',
          email:'',
          password:''
      });
      

     const handleChange = (e) => {
          setUser({...user, [e.target.name]: e.target.value});
    }

      const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:6600/:work/user/createUser', user).then((data) => {
          console.log(data)
        }).catch(err=>console.log(err))
        window.location.href = 'http://localhost:3000/SignIn';
    }

        return(
          <div className="sign-up">
          {/*Form*/}
    
              <form className="registeration-form pad-wall" onSubmit={handleSubmit}>
            
              <Form.Label className="user-registeration-title">Registeration</Form.Label>
                    <Form.Row>
                        
                    <Form.Group as={Col} id="firstName">
                        <Form.Label>First  Name</Form.Label>
                          <Form.Control 
                          placeholder="First name"
                          name="firstName"
                          onChange={handleChange}
                          />
               
                          <Form.Text className="text-muted">
                           Fill in your first name
                          </Form.Text>
                          </Form.Group>
      
                          <Form.Group as={Col} id="lastName">
                            <Form.Label>Last Name</Form.Label>
                              <Form.Control 
                              placeholder="Last name"
                              name="lastName"
                              onChange={handleChange}
                              />
                              <Form.Text className="text-muted">
                              Fill in your last name
                              </Form.Text>
                          </Form.Group>
           
                      </Form.Row>
    
                                          
                      <Form.Group id="email">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control type="email" 
                      placeholder="Enter email"
                      name="email"
                      onChange={handleChange}
                       />
                      <Form.Text className="text-muted">
                           Fill in your Email
                      </Form.Text>
                      </Form.Group>

                      <Form.Group id="password">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" 
                      placeholder="Password"
                      name="password"
                      onChange={handleChange}
                      required
                      minLength='4'
                       />
                      <Form.Text className="text-muted">
                           Fill in your Password
                      </Form.Text>
                      </Form.Group>


                      <Form.Group id="confirmPassword">
                      <Form.Label>Confirm Password</Form.Label>
                      <Form.Control type="password" 
                      placeholder="Confirm Password"
                      name="confirmPassword"
                      required
                      minLength='4'
                       />
                      <Form.Text className="text-muted">
                           Fill in your Password
                      </Form.Text>
                      </Form.Group>
                    
                        <button className="submit">Submit Form</button>
                        <Form.Text className="text-muted">
                                Already registered with us? <Link to="/signin">Sign In</Link> or Reset Password
                          </Form.Text>
                     
                        </form>
                                      {/*
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
                          <Form.Control type="number"
                           placeholder="Age"
                           name="age"
                           value={this.handleChange}
                           onChange={onChange} 
                           />
                          <Form.Text className="text-muted">
                           Fill in your Age
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
                */}
                </div>
        );
    }





export default SignUp;