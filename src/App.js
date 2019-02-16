import React, { Component } from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'
import classnames from 'classnames/bind'
import styles from './App.scss'

// Pages
import Home from './components/Home/Home'
import NavPage from './components/NavPage/NavPage'
import PageNotFound from './components/PageNotFound/PageNotFound'
import BlogPage from './components/BlogPage/BlogPage'

const cx = classnames.bind(styles)

export default class App extends Component {
  render() {
    return (
      <div>
        <ToastContainer
          closeButton={false}
          toastClassName={cx('toaster')}
          draggablePercent={30}
          hideProgressBar
        />
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/nav-menu" component={NavPage} />
            <Route path="/test" component={BlogPage} />
            <Route component={PageNotFound} />
          </Switch>
        </Router>
      </div>
    )
  }
}
