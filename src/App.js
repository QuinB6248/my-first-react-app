import React from 'react';

import './App.css';
import Title from './components/Title'
import LightSwitch from './components/LightSwitch'

import UserBoard from './components/UserBoard'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        

        <main>
        

        <UserBoard content="USERBOARD" /> 

       
        </main>
      </div>
    );
  }
}

export default App;
