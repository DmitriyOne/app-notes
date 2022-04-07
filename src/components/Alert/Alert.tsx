import classNames from 'classnames';
import * as React from 'react';

import styles from './alert.module.scss'

import { AlertContext } from '../../context/alert/alertContext';

interface IProps {
  text?: string
}

export const Alert: React.FunctionComponent<IProps> = ({
  text,
}) => {
  const { type } = React.useContext(AlertContext)

  const className = classNames(styles.alert, {
    [styles.green]: type === 'green',
    [styles.red]: type === 'red',
  })

  return (
    <>
      <div className={className}>
        <strong className={styles.text}>
          Внимание!
        </strong>
        <span className={styles.text}>
          {text}
        </span>
      </div>
    </>
  )
};
