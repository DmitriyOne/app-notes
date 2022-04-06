import classNames from 'classnames';
import * as React from 'react';

import styles from './alert.module.scss'

import { MdClose } from "react-icons/md";
import { AlertContext } from '../../context/alert/alertContext';

interface IProps {
  text?: string
}

export const Alert: React.FunctionComponent<IProps> = ({
  text,
}) => {
  const { hide, type } = React.useContext(AlertContext)
  const [closing, setClosing] = React.useState(false)

  const className = classNames(styles.alert, {
    [styles.green]: type === 'green',
    [styles.red]: type === 'red',
  })

  const handlerHide = () => {
    setClosing(true)
    hide!()
  }

  return (
    <>
      <div className={className}>
        <strong className={styles.text}>
          Внимание!
        </strong>
        <span className={styles.text}>
          {text}
        </span>
        <button
          className={styles.close}
          onClick={handlerHide}
        >
          <MdClose className={styles.closeIcon} />
        </button>
      </div>
    </>
  )
};
