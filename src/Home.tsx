import * as React from 'react';

import { FormCreateNote, FormSearchNode, NoteList } from './components';
import { AlertContext } from './context';

const Home: React.FunctionComponent = () => {
  React.useContext(AlertContext)

  return (
    <div className='container'>
      <h1 className='title-h1'>Home</h1>
      <section className='form-section'>
        <div className="col">
          <FormCreateNote />
        </div>
        <div className="col">
          <FormSearchNode />
        </div>
      </section>
      <hr className='hr' />
      <section className='notes-section'>
        <NoteList />
      </section>
    </div>
  )
};

export default Home;