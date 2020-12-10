import React, { Component } from 'react'

export default class Counter extends Component {
    constructor (props){
        super(props);
        this.state = {
            num:0
        }
    }

    hancleCounterChange = (newValue)=>{
        this.props.onCounterChange(newValue);
    }
    handlePlus=()=>{
        this.setState({
            num:this.state.num+1
        },()=>{
            this.hancleCounterChange(this.state.num)
        })
    }

    handleMin = ()=>{
            this.setState({
                num:this.state.num-1
            },()=>{
                this.hancleCounterChange(this.state.num)
            })
    }
    render() {
        return (
            <div>
                <button onClick={this.handlePlus}>Increment</button>
                <button onClick={this.handleMin}>Decrement</button>
            </div>
        )
    }
}
