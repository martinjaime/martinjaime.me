import React, { FC, HTMLAttributes } from 'react'
import classnames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './ContactButton.scss'

const cx = classnames.bind(styles)

const FaIcon = ({ icon }) => (
  <FontAwesomeIcon icon={icon} color="black" size="lg" />
)

interface ContactButtonProps {
  type: string
  url?: string
}

const ContactButton: FC<ContactButtonProps & HTMLAttributes<HTMLAnchorElement>> = ({
  type,
  url,
  ...otherProps
}) => {
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

export default ContactButton
