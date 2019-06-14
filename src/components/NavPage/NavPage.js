import React from 'react'
import styles from './NavPage.scss'
import classnames from 'classnames/bind'
import { notifyComingSoon } from '../../helpers/toast'
import PropTypes from 'prop-types'

const cx = classnames.bind(styles)

const NavPage = ({ history }) => {
  const menuItems = [
    { label: 'about', onClick: notifyComingSoon },
    { label: 'blog', onClick: notifyComingSoon },
    { label: 'personal', onClick: notifyComingSoon },
    { label: 'evan', onClick: () => history.push('/evan') },
  ]

  return (
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
}

NavPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
}

export default NavPage
