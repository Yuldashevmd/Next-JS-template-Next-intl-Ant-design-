import { FC } from 'react'
import './style.scss'
import Link from 'next/link'
import { useLang } from '@/@core/service/hooks/useLang'
import LanguageSwitcher from '../SwitchLng'

const Header: FC = () => {
  const { t, locale } = useLang()

  return (
    <header className='d-flex align-center justify-between'>
      <h1>{t('header-title')}</h1>
      <LanguageSwitcher />
      <ul className='d-flex align-center gap-x-3'>
        <li>
          <Link href={`/${locale}/login`} locale={locale}>
            Login
          </Link>
        </li>
        <li>
          <Link href={`/${locale}/dashboard`} locale={locale}>
            Dashboard
          </Link>
        </li>
      </ul>
    </header>
  )
}

export default Header
