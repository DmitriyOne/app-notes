import * as React from 'react';
import moment from 'moment';

import { Input } from '../../components';
import { AlertContext, FirebaseContext } from '../../context';

export const FormCreateNote: React.FunctionComponent = () => {
  const [value, setValue] = React.useState('')
  const { add } = React.useContext(FirebaseContext)
  const { show, hide } = React.useContext(AlertContext)

  const handlerValue = (event: { target: HTMLInputElement }) => {
    setValue(event.target.value)
  }

  const handlerSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const handlerTimer = () => {
      const alertTimeout = setTimeout(() => {
        hide!()
        clearTimeout(alertTimeout)
      }, 3000)
    }

    if (value.trim()) {
      const note = {
        title: value,
        date: moment().format('MM/YY, h:mm:ss')
      }
      add!(note)
      show!('Заметка была создана', 'green')
      setValue('')
      handlerTimer()
    } else {
      show!('Введите название заметки', 'red')
      handlerTimer()
    }
  }

  return (
    <form onSubmit={handlerSubmit}>
      <Input
        type='text'
        label='Create new note'
        id='create'
        value={value}
        onChange={handlerValue}
      />
    </form>
  )
};
