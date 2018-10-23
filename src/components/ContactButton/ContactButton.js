import React from 'react'
import classnames from 'classnames/bind'
import styles from './ContactButton.css'
import GitHubIcon from './assets/github-icon.svg'
import LinkedInIcon from './assets/linked-in-icon.svg'
import EnvelopeIcon from './assets/envelope-icon.svg'

const cx = classnames.bind(styles)

const ContactButton = ({ type, url, ...otherProps }) => {
  const Icon = props => {
    switch (type) {
      case 'github':
        return <GitHubIcon {...props} />
      case 'linkedin':
        return <LinkedInIcon {...props} />
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

export default ContactButton
