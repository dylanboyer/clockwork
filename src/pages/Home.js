import React, { Component } from 'react'
import { logout } from '../database/firebase'
import CountDown from '../components/CountDown'
import Taskbar from '../components/Taskbar'
import '../style.css'

class Home extends Component {
    constructor(props) {
        super(props)
    }

    signOut() {
        logout()
    }

    render() {
        return (
            <body class="countdownContainer">
                <div>
                    <Taskbar></Taskbar>
                    <div style={{ textAlign: 'center' }}>
                        <h1>Welcome to Clockwork!</h1>
                    </div>
                    <div class="centered">
                        <CountDown
                            onTimesup={() => {
                                alert(`Time's up!`)
                            }}
                            duration={0}
                        />
                    </div>
                    <div>
                        <button class="logoutButton" style={{ marginBottom: '30px' }} onClick={this.signOut}>
                            Logout
                        </button>
                    </div>
                </div>
            </body>
        )
    }
}

export default Home
