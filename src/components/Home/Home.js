import React, {Component} from 'react'
import styles from './Home.css'
import classnames from 'classnames/bind'

const cx = classnames.bind(styles)

export default class Home extends Component {
    render () {
      return (
        <div className={cx('root')} >
          <p className={cx('name')}>martin jaime</p>
        </div>
      )
    }
}
