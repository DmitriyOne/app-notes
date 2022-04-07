import { FunctionComponent, useState } from "react";

import { SearchContext } from "./searchContext";

export const SearchContextPropvider: FunctionComponent = ({ children }) => {
  const [valueSearch, setValueSearch] = useState<string | undefined>()

  const getValue = (event: { target: HTMLInputElement }) => {
    setValueSearch(event.target.value)
  }

  return (
    <SearchContext.Provider
      value={{ value: valueSearch, handlerValue: getValue }}
    >
      {children}
    </SearchContext.Provider>
  )
}
