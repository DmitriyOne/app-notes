import * as React from 'react';
import classNames from 'classnames';
import { CSSTransition } from 'react-transition-group'

import { AlertContext } from '../../context/alert/alertContext';

import styles from './alert.module.scss'

interface IProps {
  text?: string
}

export const Alert: React.FunctionComponent<IProps> = ({
  text,
}) => {
  const { type, visible } = React.useContext(AlertContext)
  const nodeRef = React.useRef(null);

  const className = classNames(styles.component, 'alert', {
    [styles.green]: type === 'green',
    [styles.red]: type === 'red',
  })

  return (
    <CSSTransition
      in={visible}
      timeout={{
        enter: 350,
        exit: 200
      }}
      classNames={'alert'}
      mountOnEnter
      unmountOnExit
      nodeRef={nodeRef}
    >
      <div className={className} ref={nodeRef}>
        <strong className={styles.text}>
          Внимание!
        </strong>
        <span className={styles.text}>
          {text}
        </span>
      </div>
    </CSSTransition>
  )
};
