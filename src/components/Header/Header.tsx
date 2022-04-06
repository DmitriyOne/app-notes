import * as React from 'react';
import classNames from 'classnames';

import { Logo, Menu, Switcher } from '../../components';

import styles from './header.module.scss'

export const Header: React.FunctionComponent = () => {

  return (
    <header className={styles.component}>
      <div className={classNames('container', styles.row)}>
        <Logo />
        <Menu />
        <Switcher />
      </div>
    </header>
  )
};
