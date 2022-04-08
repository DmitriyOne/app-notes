import { useLayoutEffect, useState } from "react"

const isDarkTheme = window?.matchMedia('(prefers-color-scheme: dark)').matches
const defaultSystemTheme = isDarkTheme ? 'dark' : 'light'

export const useTheme = () => {
  const [theme, setTheme] = useState(localStorage.getItem('app-theme') || defaultSystemTheme)

  useLayoutEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('app-theme', theme)
  }, [theme])

  return { theme, setTheme }
}
