// https://github.com/haryphamdev/simple-react-countdown-timer/blob/master/src/CountDown.js


import React from 'react';
import Home from './pages/Home';

export default class CountDown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: props.duration ? props.duration : 5,
        }
    }
    componentDidMount() {
        this.timer = setInterval(() => {
            let { count } = this.state;
            if (count > 0) {
                this.setState({
                count: count - 1
            }) }
        }, 1000)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.count !== this.state.count && this.state.count === 0) {
            clearInterval(this.timer);
            if (this.props.onTimesup) {
                this.props.onTimesup();
            }
        }
    }

    fmtMSS(s) { return (s - (s %= 60)) / 60 + (9 < s ? ':' : ':0') + s }

    updateTime() {
        console.log("The function is being called")
        const minutes = document.querySelector('#minutes').value
        const seconds = document.querySelector('#seconds').value
    
        if (minutes <= 0 || seconds <= 0) {
            alert("Please input a positive time.")
        } else {
            this.setState({
                count: minutes * 60 + seconds
            })
        }
    
      }

    render() {
        let { count } = this.state;
        return (
            <div>
                {this.fmtMSS(count)}
            </div>
        )
    }
}

