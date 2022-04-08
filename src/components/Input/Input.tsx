import classNames from 'classnames';
import { FunctionComponent, InputHTMLAttributes } from 'react';

import styles from './input.module.scss'

interface IProps {
  label?: string
  type?: InputHTMLAttributes<HTMLInputElement>['type']
  placeholder?: string
  id?: string
  value?: string
  onChange?: (event: { target: HTMLInputElement }) => void
  inputSize?: 'l' | 'auto'
  componentClassName?: string
  inputClassName?: string
  isCheckTheme?: boolean
}

export const Input: FunctionComponent<IProps> = ({
  label,
  type = 'text',
  placeholder,
  id,
  value,
  onChange,
  componentClassName,
  inputSize = 'l',
  inputClassName,
  isCheckTheme,
}) => {
  const labelClassName = classNames(styles.label, {
    [styles.labelCenter]: value === '',
    [styles.switch]: isCheckTheme
  })
  const inputClass = classNames(styles.input, inputClassName, {
    [styles.inputL]: inputSize === 'l',
    [styles.inputAuto]: inputSize === 'auto',
    [styles.switchInput]: isCheckTheme,
  })

  return (
    <>
      <div className={classNames(styles.component, componentClassName)}>
        <input
          id={id}
          className={inputClass}
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
        />
        <label
          htmlFor={id}
          className={labelClassName}
        >
          {label}
          {isCheckTheme && <i className={styles.switchIcon} />}
        </label>
      </div>
    </>
  )
};
