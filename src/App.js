import React, { Component } from 'react'
import NameList from './page/NameList'
import Home from './page/Home'
import './assets/css/style.css'
import {Provider} from 'react-redux'
import store from './redux/store'

export default class App extends Component {
  render() {
    return (
      <>
        <Provider store={store}>
          <Home />
        </Provider>
      </>
    );
  }
}
