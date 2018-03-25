import React, { Component } from 'react';

import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    theUserName: "Rafik"
  }

  onInputChangeHandler = (event) =>{
    this.setState({
      theUserName: event.target.value,
    })
  }

  render() {
    return (
      <div className="App">
        <UserInput 
          changed = {this.onInputChangeHandler}
          userName = {this.state.theUserName}/>
        <UserOutput 
          userName = {this.state.theUserName} />
      </div>
    );
  }
}

export default App;
