import React from 'react';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            timeZone: "Brasilia-DF"
        };
        this.showTimeZone = this.showTimeZone.bind(this);
    }
    componentDidMount() {
        this.timerId = setInterval(
            () => this.tick(),
            1000
        );
    }
    componentWillUnmount() {
        clearInterval(this.timerId);
    }
    tick() {
        this.setState({
            date: new Date()
        });
    }
    logElemTxt(e) {
        console.log(e.target.textContent);
    }
    showTimeZone() {
        document.querySelector('[data-js="time-zone"]').textContent = this.state.timeZone;
    }
    render() {
        return (
            <div>
                <h1 onClick={this.logElemTxt}>Hello World!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}</h2>
                <h1 onClick={this.showTimeZone}>Click here to show time zone</h1>
                <p>The clock's time zone is <span data-js="time-zone"></span></p>
            </div>
        );
    }
}

export default Clock;
