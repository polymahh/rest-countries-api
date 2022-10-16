import { createContext, useState } from 'react'

export const countryContext = createContext()

export const CountryProvider = ({ children }) => {
  const [initialData, setInitialData] = useState([])
  const [currentCountry, setCurrentCountry] = useState(null)

  return (
    <countryContext.Provider
      value={{ initialData, setInitialData, currentCountry, setCurrentCountry }}
    >
      {children}
    </countryContext.Provider>
  )
}
