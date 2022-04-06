import { EColor } from "../enums"

export interface IAlertProps {
  text?: string
  type?: keyof typeof EColor
  show?: (text: string, type: keyof typeof EColor) => void
  hide?: () => void
}
