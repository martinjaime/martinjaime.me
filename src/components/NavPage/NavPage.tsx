import classnames from 'classnames/bind';
import { History } from 'history';
import React, { FC } from 'react';
import { notifyComingSoon } from '../../helpers/toast';
import styles from './NavPage.scss';

const cx = classnames.bind(styles);

interface INavPageProps {
  history: History;
}

const NavPage: FC<INavPageProps> = ({ history }) => {
  const menuItems = [
    { label: 'about', onClick: notifyComingSoon },
    { label: 'blog', onClick: notifyComingSoon },
    { label: 'personal', onClick: notifyComingSoon },
    { label: 'evan', onClick: () => history.push('/evan') }
  ];

  return (
    <div className={cx('root')}>
      <div className={cx('nav-menu')}>
        {menuItems.map(({ label, onClick }) => (
          <div key={label} onClick={onClick}>
            {label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NavPage;
