import { FunctionComponent, InputHTMLAttributes, useState } from 'react';
import classNames from 'classnames';

import { Button, GeneratorSvg } from '../../components';
import { useTheme } from '../../hooks';

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
  svgClassName?: string
  isInputCheckbox?: boolean
  isCheck?: boolean
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
  svgClassName,
  isLabelChecked,
  isInputCheckbox,
  isCheck,
}) => {
  const { theme } = useTheme()
  const [click, setClick] = useState(theme === 'dark' ? false : true)

  const onClick = () => {
    setClick(prevState => !prevState)
  }

  const switchSvg = click ? 'light' : 'dark';

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

  return (
    <>
      <div className={classNames(styles.component, componentClassName)} >
        <input
          id={id}
          className={inputClass}
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          defaultChecked={isCheck}
        />
        <label
          htmlFor={id}
          className={labelClassName}
          onClick={onClick}
        >
          {label}
          {isCheckTheme &&
            <span className={styles.switchWrapper}>
              <span className={styles.switchIcon}>
                <GeneratorSvg id={switchSvg} />
              </span>
            </span>
          }
        </label>
      </div>
      {isButtonIcon &&
        <Button
          className={classNames(svgClassName, styles.buttonIcon)}
          type='submit'
        >
          <GeneratorSvg id={idSvg} />
        </Button>
      }
    </>
  )
};
