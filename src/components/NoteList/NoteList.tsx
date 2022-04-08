import * as React from 'react';

import { Loader, NoNotes, Note } from '../../components';
import { FirebaseContext, SearchContext } from '../../context';

export const NoteList: React.FunctionComponent = () => {
  const { loading, fetch, notes, remove } = React.useContext(FirebaseContext)
  const { value } = React.useContext(SearchContext)
  const [notNote, setNotNote] = React.useState(false)

  React.useEffect(() => {
    fetch!()
  }, [])

  React.useEffect(() => {
    if (notes.length === 0) {
      setNotNote(true)
    } else {
      setNotNote(false)
    }
  }, [notes])

  return (
    <>
      {loading
        && <Loader />
      }
      {/* {notNote
        && <NoNotes />
      } */}
      <Note
        notes={notes}
        onRemove={remove}
        valueTitle={value}
      />
    </>
  )
};
