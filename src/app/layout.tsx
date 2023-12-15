import '@/@core/style/globalStyle.scss'
import { ReactNode } from 'react'
// style for toast
import 'react-toastify/dist/ReactToastify.min.css'

type Props = {
  children: ReactNode
}

const RootLayout = ({ children }: Props) => children

export default RootLayout
