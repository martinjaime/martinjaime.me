import React, { Component } from 'react'
import PropTypes from 'prop-types'
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

  onClick = () => this.setState({ clicked: !this.state.clicked })

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
          <p>evan longwood
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

Home.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
}
