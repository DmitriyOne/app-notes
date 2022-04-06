import { createContext } from "react";

import { IFirebase } from "../../interfaces";

export const FirebaseContext = createContext<IFirebase>({ loading: true, notes: [] })
