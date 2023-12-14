'use client'
import { useState } from 'react'
import { createContext } from 'react'

export const Main = createContext()

const MainContext = ({ children }) => {
  const [token, setToken] = useState(null)

  return <Main.Provider value={[token, setToken]}>{children}</Main.Provider>
}

export { MainContext }
