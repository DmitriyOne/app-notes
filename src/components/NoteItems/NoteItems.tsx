import * as React from 'react';

import { Loader, NoNotes, NoteItem } from '../../components';
import { FirebaseContext, SearchContext } from '../../context';

export const NoteItems: React.FunctionComponent = () => {
  const firebase = React.useContext(FirebaseContext)
  const { value } = React.useContext(SearchContext)
  const [notNote, setNotNote] = React.useState(false)

  React.useEffect(() => {
    firebase.fetch()
  }, [])

  React.useEffect(() => {
    if (firebase.emtry && !firebase.loading) {
      setNotNote(true)
    } else {
      setNotNote(false)
    }
  })

  return (
    <>
      {firebase.loading
        && <Loader />
      }
      {notNote
        && <NoNotes />
      }
      <NoteItem
        notes={firebase.notes}
        onRemove={firebase.remove}
        valueTitle={value}
      />
    </>
  )
};
