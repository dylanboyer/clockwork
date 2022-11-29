import React, { Component, useEffect } from 'react'
import { auth, logout, addTask } from '../database/firebase'
import CountDown from '../components/CountDown'
import Taskbar from '../components/Taskbar'
import '../style.css'
import { deleteTask, getTasks, updateTaskName, updateTaskPriority, updateTaskStatus } from '../database/firebase'

class Home extends Component {
    constructor(props) {
        super(props)
    }

    signOut() {
        logout()
        // Promised object == data that might not be there but will be. either the promised data or null

        // .then catches whatever getTasks is returning
        // .then is used for promised objects, typically with await functions
        // deleteTask('4RmVZ4PqpNWePE7Zl948')
        // getTasks().then((result) => {
        //     console.log([...result])
        // })
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
