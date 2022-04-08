import * as React from 'react';
import { Link } from 'react-router-dom';

import { ROUTES } from '../../constants';

import styles from './logo.module.scss';

export const Logo: React.FunctionComponent = () => (
  <>
    <Link
      to={ROUTES.HOME}
      className={styles.logo}
    >
      React Note
    </Link>
  </>
)
