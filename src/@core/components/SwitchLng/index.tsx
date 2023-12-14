'use client'
import React, { FC } from 'react'
import { useLocale } from 'next-intl'
import { usePathname, useRouter } from '@/navigation'

const LanguageSwitcher: FC = () => {
  const locale = useLocale()
  const router = useRouter()
  const pathName = usePathname()

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    router.push(pathName, { locale: e.target.value })
  }

  return (
    <select value={locale} onChange={handleChange}>
      <option value={'en'}>Eng</option>
      <option value={'ru'}>Рус</option>
      <option value={'uz'}>Uzb</option>
    </select>
  )
}

export default LanguageSwitcher
