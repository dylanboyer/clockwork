import React, { Component } from 'react'
import '../style.css'
import './Task'
import Task from './Task'

export default class Taskbar extends Component {
    state = {
        tasks: [
            // { id: 1, text: '' },
            // { id: 2, text: '' },
            // { id: 3, text: '' },
            // { id: 4, text: '' },
        ],
    }

    // handleAddTask = (id) => {
    //     const tasks = [...this.state.tasks];
    //     const index = tasks.indexOf(id);
    //     tasks[index] = {...id };
    //     tasks[index].text = id
    //     this.setState({ counters });
    //  }

    render() {
        return (
            <div class="taskbar">
                <h2>Tasks</h2>
                {/* <Task
                // key={counter.id}
                // onDelete={this.handleDelete}
                // onIncrement={this.handleIncrement}
                // task={task}
                ></Task> */}
            </div>
        )
    }
}
