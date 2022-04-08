import { createContext } from "react";

import { ISearch } from "../../interfaces";

export const SearchContext = createContext<ISearch>({ value: '' })
