import * as React from 'react';
import classNames from 'classnames';
import { Link, useMatch } from 'react-router-dom';

import styles from './active-link.module.scss'

interface IProps {
  to: string
}

export const ActiveLink: React.FunctionComponent<IProps> = ({ children, to }) => {
  const matchPass = useMatch(to)

  const className = classNames(styles.link, {
    [styles.active]: matchPass
  })

  return (
    <Link
      to={to}
      className={className}
    >
      {children}
    </Link>
  )
};
