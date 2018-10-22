import React, {Component} from 'react'
import GitHubIcon from './assets/github-icon.svg'
import LinkedInIcon from './assets/linked-in-icon.svg'

const ContactButton = ({ type, url }) => {
  const Icon = props => {
    switch(type) {
      case 'github':
        return <GitHubIcon {...props} />
      case 'linkedin':
        return <LinkedInIcon {...props} />
    }
  }

  return (
    <a target="_blank" href={url}>
      <Icon />
    </a>
  )
}

export default ContactButton
