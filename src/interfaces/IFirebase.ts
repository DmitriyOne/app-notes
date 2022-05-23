export interface IFirebaseNote {
  id?: string
  index?: number
  title?: string
  date?: string
  onRemove?: (id: string | undefined) => void
  checked?: boolean
}

export interface IFirebase {
  loading?: boolean
  notes?: IFirebaseNote[]
  fetch?: () => Promise<void>
  add?: (note: IFirebaseNote) => Promise<void>
  remove?: (id: string | undefined) => Promise<void>
  empty?: boolean
  checked?: (note: IFirebaseNote) => Promise<void>
}
