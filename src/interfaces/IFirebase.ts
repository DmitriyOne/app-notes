export interface IFirebaseNote {
  id?: any
  title?: string
  date?: string
}

export interface IFirebase {
  loading?: boolean
  notes: IFirebaseNote[]
  noNotes?: boolean
  fetch?: () => void
  add?: (note: IFirebaseNote) => void
  remove?: (id: string) => void
}
