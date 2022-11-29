import React, { Component } from 'react'
import * as Icon from 'react-bootstrap-icons'
import '../style.css'
import { addTask, deleteTask, getTasks } from '../database/firebase'
import { doc } from 'firebase/firestore'
import { Octagon } from 'react-bootstrap-icons'

export default class Taskbar extends Component {
    constructor() {
        super()

        this.onKeyUp = this.onKeyUp.bind(this)
        this.state = {
            mapOfTasks: null,
        }
    }
    //x-octagon
    componentDidMount() {
        this.getAllTasks()
    }

    getAllTasks() {
        getTasks().then((result) => {
            this.setState({
                mapOfTasks: result,
            })
        })
    }

    onKeyUp(event) {
        if (event.charCode === 13) {
            this.createTask()
        }
    }

    createTask() {
        const taskName = document.querySelector('#task').value
        if (!taskName) {
            alert('Please enter a task!')
            return
        }

        addTask(taskName)
        document.querySelector('#task').value = ''
        this.getAllTasks()
    }

    deleteTaskById(taskID) {
        deleteTask(taskID)
        this.getAllTasks()
    }

    render() {
        return (
            <div class="taskbar">
                <h2>Tasks</h2>
                <div>Tasks:</div>
                <input id="task" placeholder="Enter task..." type="text" onKeyPress={this.onKeyUp}></input>

                {this.state.mapOfTasks &&
                    Array.from(this.state.mapOfTasks.values()).map((task) => {
                        return (
                            <ul class="taskList" key={task.taskId}>
                                <text>{task.taskName}</text>
                                <button
                                    class="deleteTaskButton"
                                    onClick={() => {
                                        this.deleteTaskById(task.taskId)
                                    }}
                                >
                                    <Icon.XOctagon />
                                </button>
                            </ul>
                        )
                    })}
            </div>
        )
    }
}
