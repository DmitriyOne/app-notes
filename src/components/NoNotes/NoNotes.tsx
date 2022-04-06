import * as React from 'react';

import styles from './no-notes.module.scss'

export const NoNotes: React.FunctionComponent = () => {
  return (
    <p className={styles.text}>
      Пока нет постов :(
    </p>
  )
};
