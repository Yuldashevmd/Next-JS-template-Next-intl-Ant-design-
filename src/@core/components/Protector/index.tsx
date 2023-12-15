import { FC, ReactNode } from 'react'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

type IProtector = {
  children: ReactNode
}

const Protector: FC<IProtector> = ({ children }) => {
  const authCookies = cookies()
  const isAuth = authCookies.get('access_token')

  if (!isAuth) {
    redirect('/login')
  }

  return children
}

export default Protector
