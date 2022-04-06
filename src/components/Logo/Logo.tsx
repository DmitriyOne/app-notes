import classNames from 'classnames';
import * as React from 'react';
import { ETheme } from '../../enums';

import styles from './logo.module.scss';

interface IProps {
  color?: keyof typeof ETheme
}

export const Logo: React.FunctionComponent<IProps> = ({
  color = 'dark',
}) => {

  const className = classNames(styles.logo, {
    [styles.light]: color === 'light',
    [styles.dark]: color === 'dark',
  })
  return (
    <>
      <h1 className={className}>
        React Note
      </h1>
    </>
  )
};
