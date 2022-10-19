import React, { Component } from 'react'
import { logout } from '../database/firebase'
import CountDown from '../components/CountDown'
import '../style.css'

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            time: 1200,
        }
    }

    signOut() {
        logout()
    }

    render() {
        return (
            <div>
                <div style={{ textAlign: 'center' }}>
                    <h1>Welcome to Clockwork!</h1>
                </div>
                <div class="centered">
                    <CountDown
                        onTimesup={() => {
                            alert(`Time's up!`)
                        }}
                        duration={this.state.time}
                    />
                </div>
                <div class="logoutButton">
                    <button onClick={this.signOut}>Logout</button>
                </div>
            </div>
        )
    }
}

export default Home
