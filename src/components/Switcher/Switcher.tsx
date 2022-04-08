import * as React from 'react';
import { useTheme } from '../../hooks';
import { Input } from '../Input';

import styles from './switcher.module.scss'

export const Switcher: React.FunctionComponent = () => {

  const { theme, setTheme } = useTheme()

  const handlerTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
    } else if (theme === 'dark') {
      setTheme('light')
    }
  }

  return (
    <>
      <div className={styles.component}>
          <Input
            inputSize='auto'
            type='checkbox'
            onChange={handlerTheme}
            isCheckTheme
            id='checkbox'
          />
      </div>
    </>
  )
};
