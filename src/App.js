import React, {Component} from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import Home from './components/Home/Home'

const history = createBrowserHistory()

export default class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    )
  }
}
