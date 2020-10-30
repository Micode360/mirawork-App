import React from 'react';
import { Navbar } from 'react-bootstrap';
import ProfileComponent from './components/profile';
import UserScreen from './components/userDisplay';
import OptionsNavbar from './components/navbar';


function App() {
  return (
    <div className="App">
       <OptionsNavbar/>
        {/*
        
        <ProfileComponent/>*/}
        <UserScreen/>
    </div>
  );
}

export default App;
