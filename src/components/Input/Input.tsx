import { FunctionComponent, InputHTMLAttributes } from 'react';
import classNames from 'classnames';

import { Button, GeneratorSvg } from '../../components';
import { ESvg } from '../../enums/ESvg';

import styles from './input.module.scss'

interface IProps {
  label?: string
  isLabelChecked?: boolean
  type?: InputHTMLAttributes<HTMLInputElement>['type']
  placeholder?: string
  id?: string
  value?: string
  onChange?: (event: { target: HTMLInputElement }) => void
  inputSize?: 'l' | 'auto'
  componentClassName?: string
  inputClassName?: string
  isCheckTheme?: boolean
  isButtonIcon?: boolean
  idSvg?: keyof typeof ESvg 
  isInputCheckbox?: boolean,
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
  isButtonIcon,
  idSvg,
  isLabelChecked,
  isInputCheckbox,
}) => {
  const labelClassName = classNames(styles.label, {
    [styles.labelCenter]: value === '',
    [styles.switch]: isCheckTheme,
    [styles.labelChecked]: isLabelChecked,
    [styles.labelCheckbox]: isInputCheckbox,
  })
  const inputClass = classNames(styles.input, inputClassName, {
    [styles.inputL]: inputSize === 'l',
    [styles.inputAuto]: inputSize === 'auto',
    [styles.switchInput]: isCheckTheme,
    [styles.inputPadding]: isButtonIcon,
    [styles.inputCheckbox]: isInputCheckbox,
  })

  // console.log(isLabelChecked);

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
      {isButtonIcon &&
        <Button
          className={styles.buttonIcon}
          type='submit'
        >
          <GeneratorSvg id={idSvg} />
        </Button>
      }
    </>
  )
};
