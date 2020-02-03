import React, { Component } from 'react'
import store from "../js/store/index";



export default class App extends Component {
  render() {
    return (
      <div>
        <h1>{store.getState()}</h1>
      </div>
    )
  }
}
