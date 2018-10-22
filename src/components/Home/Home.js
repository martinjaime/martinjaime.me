import React, {Component} from 'react'
import styles from './Home.css'
import classnames from 'classnames/bind'
import ContactButton from '../ContactButton/ContactButton'
import ProfileButton from '../ContactButton/assets/profile.svg'

const cx = classnames.bind(styles)

export default class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      clicked: false
    }
  }

  onClick = () => this.setState({ clicked: !this.state.clicked })

  render() {
    return (
      <div className={cx('root')} >
        <p onClick={this.onClick} className={cx('name')}>martin jaime</p>
        <div className={cx('buttons', { invisible: !this.state.clicked})}>
          <ContactButton type="github" url="https://github.com/martinjaime" />
          <ContactButton type="linkedin" url="https://www.linkedin.com/in/mrtnjaime/" />
          <ContactButton type="mail" />
        </div>
      </div>
    )
  }
}
