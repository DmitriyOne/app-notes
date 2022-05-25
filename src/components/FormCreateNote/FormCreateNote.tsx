import * as React from 'react';
import moment from 'moment';
import classNames from 'classnames';

import { Controller, useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';

import { IForm } from '../../interfaces/IForm';
import { Input, Error, GeneratorSvg, Button } from '../../components';
import { AlertContext, FirebaseContext } from '../../context';

import styles from './form-create-note.module.scss'

export const FormCreateNote: React.FunctionComponent = () => {
  const firebase = React.useContext(FirebaseContext)
  const alert = React.useContext(AlertContext)

  const { control, formState: { errors }, handleSubmit, reset } = useForm<IForm>()

  const handlerSubmit = (data: IForm) => {

    const handlerTimer = () => {
      const alertTimeout = setTimeout(() => {
        alert.visible = false
        alert.hide()
        clearTimeout(alertTimeout)
      }, 3000)
    }

    const note = {
      title: data.title.trim(),
      date: moment().format('MM/YY, h:mm:ss'),
      finish: data.finish.trim(),
      author: data.author.trim(),
      checked: false,
    }
    firebase.add(note).then(() => {
      alert.visible = true
      alert.show('Your note has been created', 'ready')
    }).catch(() => {
      alert.visible = true
      alert.show('An error has occurred on the server', 'error')
    })
    setTimeout(() => {
      reset()
    }, 1000)
    handlerTimer()
  }

  return (
    <form
      className={classNames('relative', styles.component)}
      onSubmit={handleSubmit(handlerSubmit)}
    >
      <div className={styles.inputWrapper}>
        <Controller
          name='title'
          control={control}
          defaultValue={''}
          rules={{
            required: 'This field is required!',
          }}
          render={({ field }) => (
            <Input
              name='title'
              type='text'
              label='Note title'
              id='note-title'
              componentClassName={styles.input}
              {...field}
            />
          )}
        />
        <ErrorMessage
          errors={errors}
          name='title'
          render={({ message }) => <Error>{message}</Error>}
        />
      </div>
      <div className={styles.inputWrapper}>
        <Controller
          name='finish'
          control={control}
          defaultValue={''}
          rules={{
            required: 'This field is required!',
          }}
          render={({ field }) => (
            <Input
              type='text'
              label='Finish date (dd.mm.yyyy)'
              id='finish-date'
              componentClassName={styles.input}
              {...field}
            />
          )}
        />
        <ErrorMessage
          errors={errors}
          name='finish'
          render={({ message }) => <Error>{message}</Error>}
        />
      </div>
      <div className={styles.inputWrapper}>
        <Controller
          name='author'
          control={control}
          defaultValue={''}
          rules={{
            required: 'This field is required!',
          }}
          render={({ field }) => (
            <Input
              type='text'
              label='Author'
              id='author'
              componentClassName={styles.input}
              {...field}
            />
          )}
        />
        <ErrorMessage
          errors={errors}
          name='author'
          render={({ message }) => <Error>{message}</Error>}
        />
      </div>
      <Button className={styles.button} type='submit'>
        Submit
        <span className={styles.arrow}>
          <GeneratorSvg id='arrow' />
        </span>
      </Button>
    </form>
  )
};
