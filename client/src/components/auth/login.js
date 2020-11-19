import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
//import Logo from '../../img/logo.png'
import { Link } from 'react-router-dom'
import  axios  from 'axios'




function SignIn() {
  const [verify, setVerify] = useState({
    email:'',
    password:''
});


const sendChange = (e) => {
    setVerify({...verify, [e.target.name]: e.target.value});
}

const submitMachine = (e) => {
  e.preventDefault();
  axios.post('http://localhost:6600/:work/user/signin', verify).then((data) => {
    console.log(data)
    return data;
  }).catch(err=>console.log(err))
  //window.location.href = 'http://localhost:3000/SignIn';
}

  return (
      <div>
      {/*Form*/}
      <div lg={2} className="sign-in">
            
          <form className="registeration-form  pad-wall" onSubmit={submitMachine}>
          <Form.Label className="user-registeration-title">Sign In</Form.Label>
      
                    <Form.Group id="email">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control 
                      type="email"
                      name="email"
                      onChange={sendChange} 
                      placeholder="Enter email" />
                      <Form.Text className="text-muted">
                          Fill in your Email
                      </Form.Text>
                      </Form.Group>

                      <Form.Group id="password">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                       type="password"
                       name="password"
                       onChange={sendChange}
                      placeholder="Password" />
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