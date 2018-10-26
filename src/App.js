import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'
import classnames from 'classnames/bind'
import styles from './App.scss'

// Pages
import Home from './components/Home/Home'
import PageNotFound from './components/PageNotFound/PageNotFound'

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
        <BrowserRouter basename={`${process.env.PUBLIC_URL || ''}/`}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route component={PageNotFound} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}
