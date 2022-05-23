import * as React from 'react';

import { GeneratorSvg } from '../Generator';

import styles from './no-notes.module.scss'

export const NoNotes: React.FunctionComponent = () => {
  return (
    <div className={styles.component}>
      <p className={styles.text}>
        Sorry, we didn't find your posts...
      </p>
      <span className={styles.icon}>
        <GeneratorSvg id='sad' />
      </span>
    </div>
  )
};
