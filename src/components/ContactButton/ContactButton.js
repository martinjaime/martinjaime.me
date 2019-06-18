import PropTypes from 'prop-types'
import React from 'react'
import classnames from 'classnames/bind'
import styles from './ContactButton.scss'
import GitHubIcon from './assets/github-icon.svg'
import LinkedInIcon from './assets/linked-in-icon.svg'
import EnvelopeIcon from './assets/envelope-icon.svg'
import PassengerIcon from './assets/passenger.svg'

const cx = classnames.bind(styles)

const ContactButton = ({ type, url, ...otherProps }) => {
  const Icon = props => {
    switch (type) {
      case 'github':
        return <GitHubIcon {...props} />
      case 'linkedin':
        return <LinkedInIcon {...props} />
      case 'navpage':
        return <PassengerIcon {...props} />
      default:
        return <EnvelopeIcon {...props} />
    }
  }

  return (
    <a target="_blank" href={url}>
      <Icon className={cx('icon')} {...otherProps} />
    </a>
  )
}

ContactButton.propTypes = {
  type: PropTypes.string,
  url: PropTypes.string,
}

export default ContactButton
