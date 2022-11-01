import React, { Component } from 'react'
import Taskbar from './Taskbar'

export default class Task extends Component {
    onKeyUp(event) {
        if (event.charCode === 13) {
            
        }
    }

    render() {
        return (
            <div>
                <div>Tasks:</div>
                <input
                    id="task"
                    placeholder="Enter task..."
                    type="text"
                    onKeyPress={this.onKeyUp(document.querySelector('#task').value)}
                ></input>
            </div>
        )
    }
}
