import React from 'react';
import { Form } from 'react-bootstrap';
//import Logo from '../../img/logo.png'
import { Link } from 'react-router-dom'
//import uuid from 'react-uuid'



function SignIn() {
 
  return (
      <div>
      {/*Form*/}
      <div xs lg={2} className="sign-in">
            
          <form className="registeration-form  pad-wall">
          <Form.Label className="user-registeration-title">Sign In</Form.Label>
      
                    <Form.Group id="email">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control type="email" placeholder="Enter email" />
                      <Form.Text className="text-muted">
                          Fill in your Email
                      </Form.Text>
                      </Form.Group>

                      <Form.Group id="password">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" placeholder="Password" />
                      <Form.Text className="text-muted">
                       Fill in your Password
                      </Form.Text>
                      </Form.Group>


                    <button className="submit">Submit Form</button>
                    <Form.Text className="text-muted">
                           Have not registered with us? <Link to="/signup">Sign Up</Link>.Forgot Password? Reset Password
                      </Form.Text>
                             
                  </form>
            </div>
          </div>



  );
}

export default SignIn;