import React, { Component } from 'react'

export default class Tasks extends Component {
    onKeyUp(event) {
        if (event.charCode === 13) {
            // enter key is char code 13
        }
    }

    render() {
        return (
            <div>
                <div>Tasks:</div>
                <input id="task" placeholder="Enter task..." type="text">
                    {' '}
                    onKeyPress={this.onKeyUp(document.querySelector('#task').value)}
                </input>
            </div>
        )
    }
}
