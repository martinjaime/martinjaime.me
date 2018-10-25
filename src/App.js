import React, { Component } from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'
import styles from './App.scss'
import classnames from 'classnames/bind'
import Home from './components/Home/Home'

const history = createBrowserHistory()
const cx = classnames.bind(styles)

export default class App extends Component {
  render() {
    return (
      <div>
        <ToastContainer
          closeButton={false}
          toastClassName={cx('toaster')}
          hideProgressBar
        />
        <Router history={history}>
          <Switch>
            <Route path="/" component={Home} />
          </Switch>
        </Router>
      </div>
    )
  }
}
