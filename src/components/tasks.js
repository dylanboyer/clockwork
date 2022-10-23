import React, { Component } from 'react'

export default class Tasks extends Component {
    render() {
        return (
            <div>
                <div>Tasks:</div>
                <input id="task" placeholder="Enter task..." type="text"></input>
            </div>
        )
    }
}
