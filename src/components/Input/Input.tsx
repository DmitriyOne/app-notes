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
}) => {
  const labelClassName = classNames(styles.label, {
    [styles.labelCenter]: value === ''
  })
  const inputClassName = classNames(styles.input, {
    [styles.inputL]: inputSize === 'l',
    [styles.inputAuto]: inputSize === 'auto',
  })

  return (
    <>
      <div className={classNames(styles.component, componentClassName)}>
        <input
          id={id}
          className={inputClassName}
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
        </label>
      </div>
    </>
  )
};
