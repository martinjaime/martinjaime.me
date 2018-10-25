import React from 'react'
import styles from './PageNotFound.scss'
import classnames from 'classnames/bind'

const cx = classnames.bind(styles)

const PageNotFound = () => (
  <div className={cx('center-content')}>
    <h1>Page Not Found</h1>
    <p>Are you sure this is the page you were looking for?</p>
  </div>
)

export default PageNotFound
