import './App.css'
import Login from './pages/Login.js'
import React, { Component } from 'react'
import Home from './pages/Home'
import { auth } from './database/firebase'
import { onAuthStateChanged } from 'firebase/auth'
import './style.css'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: null,
        }

        this.authListener = this.authListener.bind(this)
    }

    componentDidMount() {
        this.authListener()
    }

    authListener() {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                this.setState({ user })
            } else {
                this.setState({ user: null })
            }
        })
    }

    render() {
        return <div className="App">{this.state.user ? <Home /> : <Login />}</div>
    }
}

export default App
