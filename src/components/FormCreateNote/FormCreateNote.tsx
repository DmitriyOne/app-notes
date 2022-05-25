import * as React from 'react';
import moment from 'moment';
import classNames from 'classnames';

import { Input } from '../../components';
import { AlertContext, FirebaseContext } from '../../context';

import styles from './form-create-note.module.scss'
import { Button } from 'react-bootstrap';
import { GeneratorSvg } from '../Generator';

export const FormCreateNote: React.FunctionComponent = () => {
  const [title, setTitle] = React.useState('')
  const [finish, setFinish] = React.useState('')
  const [author, setAuthor] = React.useState('')
  const firebase = React.useContext(FirebaseContext)
  const alert = React.useContext(AlertContext)

  const handlerTitle = (event: { target: HTMLInputElement }) => {
    setTitle(event.target.value)
  }

  const handlerFinish = (event: { target: HTMLInputElement }) => {
    setFinish(event.target.value)
  }

  const handlerAuthor = (event: { target: HTMLInputElement }) => {
    setAuthor(event.target.value)
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

    if (title.trim() && finish.trim() && author.trim()) {
      const note = {
        title: title.trim(),
        date: moment().format('MM/YY, h:mm:ss'),
        finish: finish.trim(),
        author: author.trim(),
        checked: false,
      }
      firebase.add(note).then(() => {
        alert.visible = true
        alert.show('Your note has been created', 'ready')
      }).catch(() => {
        alert.visible = true
        alert.show('An error has occurred on the server', 'error')
      })
      setTitle('')
      setFinish('')
      setAuthor('')
      handlerTimer()
    } else {
      alert.visible = true
      alert.show('Please enter a note title', 'warning')
      handlerTimer()
    }
  }

  return (
    <form
      className={classNames('relative', styles.component)}
      onSubmit={handlerSubmit}
    >
      <Input
        type='text'
        label='Note title'
        id='note-title'
        value={title}
        onChange={handlerTitle}
        componentClassName={styles.input}
      />
      <Input
        type='text'
        label='Finish date (dd.mm.yyyy)'
        id='finish-date'
        value={finish}
        onChange={handlerFinish}
        componentClassName={styles.input}
      />
      <Input
        type='text'
        label='Author'
        id='author'
        value={author}
        onChange={handlerAuthor}
        componentClassName={styles.input}
      />
      <Button className={styles.button} type='submit'>
        Submit
        <span className={styles.arrow}>
          <GeneratorSvg id='arrow' />
        </span>
      </Button>
    </form>
  )
};
