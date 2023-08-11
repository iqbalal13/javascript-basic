import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Halo from './components/hellonojsx'
import Hallo from './components/Hallo.js'

class App extends Component {
 render() {
  return(
    <div className='App'>
      <Greet name="iqbal" job="frontend" />
      <Greet name="Al" job="backend" />
      <Greet name="Muhammad" job="fullstack"/>
     {/*<Welcome />*/}
      {/*<Hello />*/}
      {/*<Halo />*/}
      {/*<Hallo />*/}

    </div>

  );
 }
  
}
export default App;
