import { Spin } from 'antd'
import { FC } from 'react'

const Loading: FC = () => {
  return (
    <section className='d-flex align-center justify-center' style={{ height: '100dvh' }}>
      <Spin size='large' />
    </section>
  )
}

export default Loading
