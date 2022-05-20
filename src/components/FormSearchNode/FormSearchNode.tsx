import * as React from 'react';
import { SearchContext } from '../../context';

import { Input } from '../Input';

export const FormSearchNode: React.FunctionComponent = () => {
  const { value, handlerValue } = React.useContext(SearchContext)

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <form className='relative' onSubmit={onSubmit}>
      <Input
        type='text'
        label='Search note'
        id='search'
        value={value || ''}
        onChange={handlerValue}
        isButtonIcon
        idSvg='search'
      />
    </form>
  )
};
