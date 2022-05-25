import React, {useState} from 'react';
import { useTheme } from '../../hooks';
import { Input } from '../Input';

import styles from './switcher.module.scss'

export const Switcher: React.FunctionComponent = () => {
  const { theme, setTheme } = useTheme()
  const [checked, setChecked] = useState(theme === 'dark' ? true : false);

  const handlerTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
      setChecked(false)

    } else if (theme === 'dark') {
      setTheme('light')
      setChecked(true)
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
          isCheck={checked}
        />
      </div>
    </>
  )
};
