import * as React from 'react';
import moment from 'moment';

import { Input } from '../../components';
import { AlertContext, FirebaseContext } from '../../context';

export const FormCreateNote: React.FunctionComponent = () => {
  const [value, setValue] = React.useState('')
  const firebase = React.useContext(FirebaseContext)
  const alert = React.useContext(AlertContext)

  const handlerValue = (event: { target: HTMLInputElement }) => {
    setValue(event.target.value)
  }

  const handlerSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const handlerTimer = () => {
      const alertTimeout = setTimeout(() => {
        alert.visible = false
        alert.hide()
        clearTimeout(alertTimeout)
      }, 3000)
    }

    if (value.trim()) {
      const note = {
        title: value.trim(),
        date: moment().format('MM/YY, h:mm:ss'),
        checked: false,
      }
      firebase.add(note).then(() => {
        alert.visible = true
        alert.show('Your note has been created', 'ready')
      }).catch(() => {
        alert.visible = true
        alert.show('An error has occurred on the server', 'error')
      })
      setValue('')
      handlerTimer()
    } else {
      alert.visible = true
      alert.show('Please enter a note title', 'warning')
      handlerTimer()
    }
  }

  return (
    <form className='relative' onSubmit={handlerSubmit}>
      <Input
        type='text'
        label='Create new note'
        id='create'
        value={value}
        onChange={handlerValue}
        isButtonIcon
        idSvg='add'
      />
    </form>
  )
};
