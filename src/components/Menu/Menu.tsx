import * as React from 'react';

import { ROUTES } from '../../constants/index';
import { ActiveLink } from '../../components';

import styles from './menu.module.scss'

export const Menu: React.FunctionComponent = () => {

  return (
    <nav>
      <ul className={styles.menu}>
        <li className={styles.menuItem}>
          <ActiveLink
            to={ROUTES.HOME}
          >
            Home
          </ActiveLink>
        </li>
        <li className={styles.menuItem}>
          <ActiveLink
            to={ROUTES.ABOUT_US}
          >
            About us
          </ActiveLink>
        </li>
        <li className={styles.menuItem}>
          <ActiveLink
            to={ROUTES.CREATE_NODE}
          >
            Create note
          </ActiveLink>
        </li>
      </ul>
    </nav >
  )
};
