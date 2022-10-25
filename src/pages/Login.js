import React, { Component } from 'react'
import { registerWithEmailAndPassword, loginWithEmailAndPassword } from '../database/firebase'
import '../style.css'

class Login extends Component {
    constructor() {
        super()
        this.onKeyUp = this.onKeyUp.bind(this)
    }

    createAccount() {
        const email = document.querySelector('#email').value
        const password = document.querySelector('#password').value
        registerWithEmailAndPassword(email, password)
    }

    login() {
        const email = document.querySelector('#email').value
        const password = document.querySelector('#password').value
        loginWithEmailAndPassword(email, password)
    }

    onKeyUp(event) {
        if (event.charCode === 13) { // enter key is char code 13
            this.login()
        }
    }

    render() {
        return (
            <div class="loginContainer">
                <h1>Clockwork</h1>
                <div>
                    <div style={{ marginTop: -10 }}>Email</div>
                    <input id="email" placeholder="Email" type="text" />
                </div>
                <div>
                    <div>Password</div>
                    <input id="password" placeholder="Password" type="password" onKeyPress={this.onKeyUp} />
                </div>
                <button class="button" style={{ margin: '10px', marginTop: '20px' }} onClick={this.login}>
                    Login
                </button>
                <button class="button" style={{ margin: '10px', marginBottom: '30px' }} onClick={this.createAccount}>
                    Create Account
                </button>
            </div>
        )
    }
}

export default Login
