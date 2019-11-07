import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classnames from 'classnames/bind';
import React from 'react';
import styles from './ContactButton.scss';

const cx = classnames.bind(styles);

interface IFaIconProps {
  icon: IconProp;
}

const FaIcon: React.FC<IFaIconProps> = ({ icon }) => (
  <FontAwesomeIcon icon={icon} color="black" size="lg" />
);

interface IContactButtonProps {
  type: string;
  url?: string;
}

const ContactButton: React.FC<
  IContactButtonProps & React.HTMLAttributes<HTMLAnchorElement>
> = ({ type, url, ...otherProps }) => {
  const Icon = props => {
    switch (type) {
      case 'github':
        return <FaIcon icon={['fab', 'github']} />;
      case 'linkedin':
        return <FaIcon icon={['fab', 'linkedin']} />;
      default:
        return <FaIcon icon={['fas', 'envelope']} />;
    }
  };

  return (
    <a target="_blank" href={url}>
      <Icon className={cx('icon')} {...otherProps} />
    </a>
  );
};

export default ContactButton;
