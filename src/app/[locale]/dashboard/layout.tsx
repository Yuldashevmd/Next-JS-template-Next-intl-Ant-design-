import { FC, ReactNode } from 'react'
import Protector from '@/@core/components/Protector'

type IDashLayout = {
  children: ReactNode
}

const DashLayout: FC<IDashLayout> = ({ children }) => {
  return <Protector>{children}</Protector>
}

export default DashLayout
