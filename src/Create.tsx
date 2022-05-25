import * as React from 'react';

import { FormCreateNote } from './components';

const Create: React.FunctionComponent = () => {

  return (
    <div className='container'>
      <h1 className='title-h1'>Create note</h1>
      <FormCreateNote />
    </div>
  )
};

export default Create;
