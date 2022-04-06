import classNames from 'classnames';
import { FunctionComponent, InputHTMLAttributes } from 'react';

import styles from './input.module.scss'

interface IProps {
  label?: string
  type?: InputHTMLAttributes<HTMLInputElement>['type']
  placeholder?: string
  id?: string
  value?: string
  onChange?: (event: { target: HTMLInputElement}) => void
}

export const Input: FunctionComponent<IProps> = ({
  label,
  type = 'text',
  placeholder,
  id,
  value,
  onChange
}) => {
  // const [value, setValue] = useState('')

  // const handleValue = (event: { target: HTMLInputElement; }) => {
  //   setValue(event.target.value)
  // }

  const labelClassName = classNames(styles.label, {
    [styles.labelCenter]: value === ''
  })

  return (
    <>
      <div className={styles.component}>
        <input
          id={id}
          className={styles.input}
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
