import classnames from 'classnames/bind';
import { History } from 'history';
import React, { Component } from 'react';
import { notifyComingSoon } from '../../helpers/toast';
import ContactButton from '../ContactButton/ContactButton';
import styles from './Home.scss';

const cx = classnames.bind(styles);

interface IHomeProps {
  history: History;
}

interface IHomeState {
  open: boolean;
}

export default class Home extends Component<IHomeProps, IHomeState> {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    };
  }

  public componentDidMount() {
    setTimeout(() => this.setState({ open: true }), 7000);
    window.addEventListener('scroll', this.onScroll);
  }

  public onClick = () => this.setState({ open: !this.state.open });

  public componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll);
  }

  public onScroll = () => {
    window.removeEventListener('scroll', this.onScroll);
    this.props.history.push('/nav-menu');
  };

  public render() {
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
        </div>
      </div>
    );
  }
}
