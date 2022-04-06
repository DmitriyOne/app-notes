import * as React from 'react';

import { Loader, NoNotes, Note } from '../../components';
import { FirebaseContext } from '../../context';

export const NoteList: React.FunctionComponent = () => {
  const { loading, fetch, notes, remove, noNotes } = React.useContext(FirebaseContext)

  React.useEffect(() => {
    fetch!()
  }, [])

  return (
    <>
      {loading
        && <Loader />
      }
      {noNotes
        && <NoNotes />
      }
      <Note
        notes={notes}
        onRemove={remove}
        valueTitle={''}
      />
    </>
  )
};
