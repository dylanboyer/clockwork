import React, { Component } from 'react';
import { logout } from '../database/firebase'
import CountDown from '../CountDown'

class Home extends Component {
  signOut() {
    logout()
  }
  
  render() {
    return (
      <div>
      <div style={{textAlign: 'center'}}>
      <h1>Welcome to Clockwork!</h1>
      <button onClick = {this.signOut}>Logout</button>
      <button>Start</button>
    </div>
    <div>
          <CountDown
            onTimesup={() => {
              alert(`Time's up!`)
            }}
            duration={65}
          />
        </div>
    </div>

    
    );
  }
}

export default Home;