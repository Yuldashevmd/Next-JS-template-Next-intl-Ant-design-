import LoginPage from '@/@core/components/pages/login'
import { FC } from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Login page'
}

const Login: FC = () => <LoginPage />

export default Login
