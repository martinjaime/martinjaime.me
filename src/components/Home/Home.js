import React, { Component } from 'react'
import styles from './Home.scss'
import classnames from 'classnames/bind'
import { notify } from '../../helpers/toast'
import ContactButton from '../ContactButton/ContactButton'

const cx = classnames.bind(styles)

export default class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      open: false,
    }
  }

  componentDidMount() {
    setTimeout(() => this.setState({ open: true }), 7000)
  }

  onClick = () => this.setState({ open: !this.state.open })

  notifyComingSoon = () => {
    notify('Coming soon!')
  }

  render() {
    return (
      <div className={cx('root')}>
        <div className={cx('name-wrapper')}>
          <p onClick={this.onClick} className={cx('name')}>
            martin jaime
          </p>
        </div>
        <div className={cx('buttons', { invisible: !this.state.open })}>
          <ContactButton type="github" url="https://github.com/martinjaime" />
          <ContactButton
            type="linkedin"
            url="https://www.linkedin.com/in/mrtnjaime/"
          />
          <ContactButton onClick={this.notifyComingSoon} type="mail" />
        </div>
      </div>
    )
  }
}
