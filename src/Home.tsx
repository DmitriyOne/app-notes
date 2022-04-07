import * as React from 'react';

import { FormCreateNote, FormSearchNode, NoteList } from './components';

const Home: React.FunctionComponent = () => (
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

export default Home;
