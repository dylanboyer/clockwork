import React, { Component } from 'react';
import { logout } from '../database/firebase'
import CountDown from '../CountDown'

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      time: 1000
    };
} 

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
            duration={this.state.time}
          />
          <div>
            <br></br>
            <div>How many minutes?</div>
            <input id = "minutes" placeholder = "Enter time in minutes" type = "text"></input>
            <div>How many seconds?</div>
            <input id = "seconds" placeholder = "Enter time in seconds" type = "text"></input>
            <div></div>
            <button style={{margin: '10px'}} onClick={() => {
                this.props.updateTime()
            }}>Set Timer</button>
          </div>
        </div>
    </div>


    
    );
  }
}

export default Home;