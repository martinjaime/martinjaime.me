import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import classnames from 'classnames/bind';
import React, { FC } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import styles from './App.scss';
import Evan from './components/Evan/Evan';
import Home from './components/Home/Home';
import NavPage from './components/NavPage/NavPage';
import PageNotFound from './components/PageNotFound/PageNotFound';

const cx = classnames.bind(styles);
library.add(fas, fab);

const App: FC = () => (
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
);

export default App;
