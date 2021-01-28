// import React, { Component } from 'react'

// export default class Counter extends Component {
//     constructor (props){
//         super(props);
//         this.state = {
//             num:0
//         }
//     }

//     handleCounterChange = (newValue)=>{
//         this.props.onCounterChange(newValue);
//     }
//     handlePlus=()=>{
//         this.setState({
//             num:this.state.num+1
//         },()=>{
//             this.handleCounterChange(this.state.num)
//         })
//     }

//     handleMin = ()=>{
//             this.setState({
//                 num:this.state.num-1
//             },()=>{
//                 this.handleCounterChange(this.state.num)
//             })
//     }
//     render() {
//         return (
//             <div>
//                 <button onClick={this.handlePlus}>Increment</button>
//                 <button onClick={this.handleMin}>Decrement</button>
//             </div>
//         )
//     }
// }

import React,{useState} from 'react'

function Counter(props) {
    return (
      <div>
        <p>{props.angka}</p>
        <button onClick={props.increment}>Increment</button>
      </div>
    );
}

export default Counter
