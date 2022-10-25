import React, { Component } from 'react'
import '../style.css'
import './Tasks'
import Tasks from './Tasks'

export default class Taskbar extends Component {
    state = {
        tasks: [
            { id: 1, text: '' },
            { id: 2, text: '' },
            { id: 3, text: '' },
            { id: 4, text: '' },
        ],
    }

    handleAddTask = (counterId, text) => {
        const tasks = this.state.tasks.add(counterID)
        this.setState({ text })
    }

    render() {
        return (
            <div class="taskbar">
                <h2>Tasks</h2>
                <Tasks></Tasks>
            </div>
        )
    }
}
