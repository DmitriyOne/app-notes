import * as React from 'react';

import styles from './error.module.scss';

interface IProps {
  children: React.ReactNode;
}

export const Error: React.FunctionComponent<IProps> = ({
  children
}) => {
  return (
    <span className={styles.component}>
      {children}
    </span>
  );
};
