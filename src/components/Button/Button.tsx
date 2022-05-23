import * as React from 'react';
import classNames from 'classnames';

import styles from './button.module.scss';

interface IProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  children: React.ReactNode
  className?: string
};

export const Button: React.FunctionComponent<IProps> = ({
  className,
  children,
}) => (
  <button className={classNames(styles.component, className)}>
    {children}
  </button>
);
