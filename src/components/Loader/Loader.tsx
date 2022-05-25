import * as React from 'react';

import styles from './loader.module.scss'

export const Loader: React.FunctionComponent = () => {
  return (
    <p className={styles.text}>
      Loading...
    </p>
  )
};
