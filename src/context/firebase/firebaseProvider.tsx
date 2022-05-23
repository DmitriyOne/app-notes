import { useState } from "react";
import axios from 'axios'

import { IFirebase, IFirebaseNote } from "../../interfaces";
import { FirebaseContext } from "./firebaseContext";

const url = process.env.REACT_APP_DB_URL

export const FirebaseContextProvider: React.FunctionComponent<IFirebase> = ({ children, notes }) => {
  const [loader, setLoader] = useState(false)
  const [items, setItems] = useState(notes)
  const [emptyNotes, setEmptyNotes] = useState(false)

  const fetchNotes = async () => {
    setLoader(true)
    const res = await axios.get(`${url}/notes.json`)

    if (res.data === null) {
      setLoader(false)
      setEmptyNotes(true)
    } else {
      const notesArray = Object.keys(res.data).map(key => {
        return {
          title: res.data[key].title,
          date: res.data[key].date,
          id: key,
          checked: res.data[key].checked
        }
      })
      setLoader(false)
      setItems(notesArray)
    }
  }

  const addNote = async (note: IFirebaseNote) => {
    try {
      const res = await axios.post(`${url}/notes.json`, note)
      const newNote = {
        ...note,
        id: res.data.name,
      }
      setItems([...items, newNote])
      setLoader(false)
      setEmptyNotes(false)
    } catch (e: any) {
      throw new Error(e.message)
    }
  }

  const removeNote = async (id: string | undefined) => {
    await axios.delete(`${url}/notes/${id}.json`)
    const removeNotes = items.filter(note => note.id !== id)
    setItems(removeNotes)
    const res = await axios.get(`${url}/notes.json`)
    if (res.data === null) {
      setEmptyNotes(true)
    }
  }

  const checkedNote = async (note: IFirebaseNote) => {
    await axios.patch(`${url}/notes/${note.id}.json`, {
      ...note,
      checked: !note.checked
    })

    const res = await axios.get(`${url}/notes.json`)
    const notesArray = Object.keys(res.data).map(key => {
      return {
        title: res.data[key].title,
        date: res.data[key].date,
        id: key,
        checked: res.data[key].checked
      }
    })
    setItems(notesArray)
  }

  return (
    <FirebaseContext.Provider value={{
      loading: loader,
      notes: items,
      fetch: fetchNotes,
      add: addNote,
      remove: removeNote,
      empty: emptyNotes,
      checked: checkedNote,
    }}>
      {children}
    </FirebaseContext.Provider>
  )
}
