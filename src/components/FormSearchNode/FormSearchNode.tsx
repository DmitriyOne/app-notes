import * as React from 'react';

import { Input } from '../Input';

export const FormSearchNode: React.FunctionComponent = () => {
  let [value, setValue] = React.useState('')

  const handlerValue = (event: { target: HTMLInputElement }) => {
    setValue(event.target.value)
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <form onSubmit={onSubmit}>
      <Input
        type='text'
        label='Search note'
        id='search'
        value={value}
        onChange={handlerValue}
      />
    </form>
  )
};
