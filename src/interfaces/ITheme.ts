import { ETheme } from "../enums";

export interface ITheme {
  theme?: keyof typeof ETheme
  setTheme?: () => void
}
