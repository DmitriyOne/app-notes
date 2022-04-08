import { EColor } from "../enums"

export interface IAlertProps {
  visible?: boolean
  text?: string
  type?: keyof typeof EColor
  show?: (text: string, type: keyof typeof EColor) => void
  hide?: () => void
}
