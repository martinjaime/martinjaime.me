import React, { Component } from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { createBrowserHistory } from 'history'
import 'react-toastify/dist/ReactToastify.min.css'
import classnames from 'classnames/bind'
import './helpers/global-styles.scss'
import styles from './App.scss'

// Pages
import Home from './components/Home/Home'
import PageNotFound from './components/PageNotFound/PageNotFound'

const history = createBrowserHistory()
const cx = classnames.bind(styles)

export default class App extends Component {
  render() {
    return (
      <div>
        <ToastContainer
          closeButton={false}
          toastClassName={cx('toaster')}
          draggablePercent={45}
          hideProgressBar
        />
        <Router history={history}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="*" component={PageNotFound} />
          </Switch>
        </Router>
      </div>
    )
  }
}
