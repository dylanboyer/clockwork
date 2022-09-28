import React, { Component } from 'react';
import { registerWithEmailAndPassword, loginWithEmailAndPassword } from '../database/firebase'

class Login extends Component {

  createAccount() {
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    registerWithEmailAndPassword(email, password)
  }

  login() {
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    loginWithEmailAndPassword(email, password)
  }

  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <div>
          <div>Email</div>
          <input id="email" placeholder="Email" type="text"/>
        </div>
        <div>
          <div>Password</div>
          <input id="password" placeholder="Password" type="password"/>
        </div>
        <button style={{margin: '10px'}} onClick={this.login}>Login</button>
        <button style={{margin: '10px'}} onClick={this.createAccount}>Create Account</button>
      </div>
    )
  }
}

export default Login;