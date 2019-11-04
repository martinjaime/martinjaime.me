import React, { Component } from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'
import classnames from 'classnames/bind'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

import Home from './components/Home/Home'
import NavPage from './components/NavPage/NavPage'
import PageNotFound from './components/PageNotFound/PageNotFound'
import Evan from './components/Evan/Evan'
import styles from './App.scss'

const cx = classnames.bind(styles)
library.add(fas, fab)

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
            <Route path="/evan" component={Evan} />
            <Route component={PageNotFound} />
          </Switch>
        </Router>
      </div>
    )
  }
}
