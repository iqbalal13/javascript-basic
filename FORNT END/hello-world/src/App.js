import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Halo from './components/hellonojsx'

class App extends Component {
 render() {
  return(
    <div className='App'>
      <Greet />
      <Welcome />
      <Hello />
      <Halo />

    </div>

  );
 }
  
}
export default App;
