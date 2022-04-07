import { useState } from "react";
import axios from 'axios'

import { IFirebase, IFirebaseNote } from "../../interfaces";
import { FirebaseContext } from "./firebaseContext";

const url = process.env.REACT_APP_DB_URL

export const FirebaseContextProvider: React.FunctionComponent<IFirebase> = ({ children, notes }) => {
  const [loader, setLoader] = useState(false)
  const [notNote, setnotNotes] = useState(false)
  const [items, setItems] = useState(notes)

  const fetchNotes = async () => {
    setLoader(true)
    const res = await axios.get(`${url}/notes.json`)
    if (res.data === null) {
      setLoader(false)
      setnotNotes(true)
    } else {
      const notesArray = Object.keys(res.data).map(key => {
        return {
          title: res.data[key].title,
          date: res.data[key].date,
          id: key
        }
      })
      setLoader(false)
      setItems(notesArray)
    }
  }

  const addNote = async (note: IFirebaseNote) => {
    const res = await axios.post(`${url}/notes.json`, note)
    const newNote = {
      title: note.title,
      id: note.id = res.data.name,
      date: note.date
    }
    items.push(newNote)
    setLoader(false)
    setnotNotes(false)
  }

  const removeNote = async (id: string) => {
    await axios.delete(`${url}/notes/${id}.json`)
    const removeNotes = items.filter(note => note.id !== id)
    setItems(removeNotes)
  }

  return (
    <FirebaseContext.Provider value={{
      loading: loader,
      notes: items,
      noNotes: notNote,
      fetch: fetchNotes,
      add: addNote,
      remove: removeNote,
    }}>
      {children}
    </FirebaseContext.Provider>
  )
}
