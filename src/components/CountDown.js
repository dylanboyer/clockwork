// https://github.com/haryphamdev/simple-react-countdown-timer/blob/master/src/CountDown.js

import React from 'react'
import Home from '../pages/Home'

export default class CountDown extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: props.duration,
            isStopped: true,
        }
    }

    componentDidMount() {
        this.timer = setInterval(() => {
            let { count } = this.state
            if (this.state.isStopped) {
                return
            }
            if (count > 0) {
                this.setState({
                    count: count - 1,
                })
            }
        }, 1000)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.count !== this.state.count && this.state.count === 0) {
            clearInterval(this.timer)
            if (this.props.onTimesup) {
                this.props.onTimesup()
            }
        }
    }

    fmtMSS(s) {
        return (s - (s %= 60)) / 60 + (9 < s ? ':' : ':0') + s
    }

    updateTime() {
        let minutes = document.querySelector('#minutes').value
        let seconds = document.querySelector('#seconds').value

        if (!minutes && !seconds) {
            alert('Please enter a time.')
            return
        }

        if (minutes < 0) {
            alert('Please input a positive time.')
        } else if (seconds < 0) {
            alert('Please input a positive time.')
        }

        if (!minutes) {
            minutes = 0
        }

        if (!seconds) {
            seconds = 0
        }

        this.setState({
            count: parseInt(minutes) * 60 + parseInt(seconds),
        })
    }

    render() {
        let { count } = this.state
        return (
            <div>
                <h2>{this.fmtMSS(count)}</h2>
                <div>
                    <br></br>
                    <div>How many minutes?</div>
                    <input id="minutes" placeholder="Enter time in minutes" type="text"></input>
                    <div>How many seconds?</div>
                    <input id="seconds" placeholder="Enter time in seconds" type="text"></input>
                    <div></div>
                    <button
                        class="button"
                        onClick={() => {
                            this.setState({
                                isStopped: !this.state.isStopped,
                            })
                        }}
                    >
                        {this.state.isStopped ? 'Start' : 'Stop'}
                    </button>
                    <button
                        class="button"
                        onClick={() => {
                            this.updateTime()
                            this.setState({ isStopped: true })
                        }}
                    >
                        Set Timer
                    </button>
                </div>
            </div>
        )
    }
}
