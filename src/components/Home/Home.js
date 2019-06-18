import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './Home.scss'
import classnames from 'classnames/bind'
import { notifyComingSoon } from '../../helpers/toast'
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
    window.addEventListener('scroll', this.onScroll)
  }

  onClick = () => this.setState({ open: !this.state.open })

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll)
  }

  onScroll = () => {
    window.removeEventListener('scroll', this.onScroll)
    this.props.history.push('/nav-menu')
  }

  onClick = () => this.setState({ open: !this.state.open })

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
          <ContactButton onClick={notifyComingSoon} type="mail" />
          <ContactButton
            onClick={notifyComingSoon}
            type="navpage"
            url="/nav-menu"
          />
        </div>
      </div>
    )
  }
}

Home.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
}
