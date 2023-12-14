import { useContext } from 'react'
import { Main } from '../context/main'

const useAuthContext = () => {
  const [token, setToken] = useContext(Main)

  return {
    token,
    setToken
  }
}

export { useAuthContext }
