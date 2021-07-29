import React, { Component } from 'react'
import {
  Switch,
  Route,
  BrowserRouter
} from "react-router-dom";
import Home from './pages/Home'

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <Switch>
            <Route path="/" component={Home} exact />
          </Switch>
      </BrowserRouter>
    )
  }
}
