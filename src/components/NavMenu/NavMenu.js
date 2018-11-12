import React from 'react'
import styles from './NavMenu.scss'
import classnames from 'classnames/bind'

const cx = classnames.bind(styles)

const NavMenu = () => (
  <div className={cx('nav-menu')}>
    <span>About</span>
    <span>Blog</span>
    <span>Personal</span>
  </div>
)

export default NavMenu
