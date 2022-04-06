import { createContext } from "react";

import { IAlertProps } from "../../interfaces";

export const AlertContext = createContext<IAlertProps>({ text: '' })
