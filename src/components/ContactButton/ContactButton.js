import PropTypes from 'prop-types'
import React from 'react'
import classnames from 'classnames/bind'
import styles from './ContactButton.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const cx = classnames.bind(styles)

const FaIcon = ({ icon }) => (
  <FontAwesomeIcon icon={icon} color="black" size="lg" />
)

const ContactButton = ({ type, url, ...otherProps }) => {
  const Icon = props => {
    switch (type) {
      case 'github':
        return <FaIcon icon={['fab', 'github']} />
      case 'linkedin':
        return <FaIcon icon={['fab', 'linkedin']} />
      default:
        return <FaIcon icon={['fas', 'envelope']} />
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
