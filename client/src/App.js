import React from 'react';
//import { Navbar } from 'react-bootstrap';
import SignUp from './components/auth/registeration';
import SignIn from './components/auth/login';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import UserScreen from './components/userDisplay';
//import OptionsNavbar from './components/navbar';
import Home from './components/darshboard';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
  
        {/*
                   <OptionsNavbar/>      
        <ProfileComponent/>
            <UserScreen/>
        */}
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/users' component={UserScreen}/>
          <Route exact path='/signup' component={SignUp}/>
          <Route exact path='/signin' component={SignIn}/>
        </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
