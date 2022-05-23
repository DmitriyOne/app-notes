import * as React from 'react';
import classNames from 'classnames';
import { CSSTransition } from 'react-transition-group'

import { AlertContext } from '../../context/alert/alertContext';

import styles from './alert.module.scss'
import { GeneratorSvg } from '../Generator';

interface IProps {
  text?: string
}

export const Alert: React.FunctionComponent<IProps> = ({
  text,
}) => {
  const { type, visible } = React.useContext(AlertContext)
  const nodeRef = React.useRef(null);

  const className = classNames(styles.component, 'alert', {
    [styles.green]: type === 'ready',
    [styles.red]: type === 'error',
    [styles.warning]: type === 'warning',
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
        <span className={styles.iconWrapper}>
          <GeneratorSvg id={type} />
        </span>
        <div className={styles.contentWrapper}>
          <h5 className={styles.title}>
            Attention!
          </h5>
          <span className={styles.text}>
            {text}
          </span>
        </div>
      </div>
    </CSSTransition>
  )
};
