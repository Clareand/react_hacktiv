import React from 'react';
import logo from './logo.svg';
import './App.css';
import Headers from './molecules/Header/Headers';
import Counter from './component/Counter';
import Cards from './molecules/Cards/Cards';


class App extends React.Component{
  constructor(){
    super()
    this.state={
      num:0
    }
  }
  handleCounterChange = (newValue) => {
    this.setState({
      num: newValue
    })
  }
  render(){
    return (
      // <div className="App">
      //   <header className="App-header">
      //     <Headers/>
      //     <Counter onCounterChange={(newValue)=>this.handleCounterChange(newValue)} />
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //       Edit <code>src/App.js</code> and save to reload.
      //   </p>
      //     <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Learn React
      //   </a>
      //   </header>
      // </div>
      <div>
        <Headers />
        <Cards />
      </div>
    );
  }
}

export default App;
