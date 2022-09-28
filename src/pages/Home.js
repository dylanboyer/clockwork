import React, { Component } from 'react';
import { logout } from '../database/firebase'

class Home extends Component {

  signOut() {
    logout()
  }

  render() {
    return (
      <div style={{textAlign: 'center'}}>
        <h1>Welcome to Clockwork!</h1>
        <button onClick = {this.signOut}>Logout</button>
      </div>
    )
  }
}

export default Home;