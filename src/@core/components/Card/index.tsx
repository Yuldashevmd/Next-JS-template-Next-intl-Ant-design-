import { FC, ReactNode } from 'react'
import './style.scss'

type CardTypes = {
  width: string
  height: string
  title?: string
  children?: ReactNode
}

const Card: FC<CardTypes> = props => {
  return (
    <div className='card' style={{ width: `${props.width}`, height: `${props.height}` }}>
      <div className='title d-flex align-center justify-between'>
        <h2>{props.title}</h2>
      </div>
      <div className='divider' />
      {props.children}
    </div>
  )
}

export { Card }
