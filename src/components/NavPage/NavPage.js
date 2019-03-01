import React from 'react'
import styles from './NavPage.scss'
import classnames from 'classnames/bind'
import { notifyComingSoon } from '../../helpers/toast'

const cx = classnames.bind(styles)
const menuItems = [
  { label: 'about', onClick: notifyComingSoon },
  { label: 'blog', onClick: notifyComingSoon },
  { label: 'personal', onClick: notifyComingSoon },
  { label: 'evan', onClick: notifyComingSoon },
]

const NavPage = () => (
  <div className={cx('root')}>
    <div className={cx('nav-menu')}>
      {menuItems.map(({ label, onClick }) => (
        <div key={label} onClick={onClick}>
          {label}
        </div>
      ))}
    </div>
  </div>
)

export default NavPage
