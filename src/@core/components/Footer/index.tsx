import { FC } from 'react'
import './style.scss'
import { useLang } from '@/@core/service/hooks/useLang'

const Footer: FC = () => {
  const { t } = useLang()

  return (
    <footer className='d-flex align-center'>
      <h1>{t('footer-title')}</h1>
    </footer>
  )
}

export default Footer
