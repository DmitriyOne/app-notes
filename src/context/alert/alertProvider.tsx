import { useState } from "react";

import { Alert } from "../../components";
import { EColor } from "../../enums";

import { IAlertProps } from "../../interfaces";
import { AlertContext } from "./alertContext";

export const AlertContextProvider: React.FunctionComponent<IAlertProps> = ({
  text,
  children,
  type
}) => {
  const [alertText, setAlertText] = useState<string | undefined>(text)
  const [alertType, setAlertType] = useState(type)
  const [alertOpen, setAlertOpen] = useState<boolean>(false)

  const openAlert = (text: string, type: keyof typeof EColor) => {
    setAlertText(text)
    setAlertType(type)
    setAlertOpen(true)
  }
  const closeAlert = () => setAlertOpen(false)
  return (
    <AlertContext.Provider value={{
      text: alertText,
      show: openAlert,
      hide: closeAlert,
      type: alertType,
      visible: alertOpen
    }}>
      <Alert text={alertText} />
      {children}
    </AlertContext.Provider>
  )
}
