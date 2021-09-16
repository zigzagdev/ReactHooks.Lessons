import React, { Component } from 'react'

class ClassCounter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    incrementCount = () => {
        this.setState({
            count: this.state.count + 1
        })
    }


    render() {
        return (
            <div>
                <button onClick={this.incrementCount}>Count {this.state.count}</button>
            </div>
        )
    }
}

export default ClassCounter;

// こっちはHookCounter.jsとは異なり、Hooksを利用しないで書いてるptとなる。
// this.stateにてカウントを0にセットし、incrementCount変数のsetCount定義によってカウント回数が増えていく算段となっている。