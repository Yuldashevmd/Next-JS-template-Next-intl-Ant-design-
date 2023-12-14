import React from 'react'
import { useTranslations } from 'next-intl'

const NotFoundPage = () => {
  const t = useTranslations()

  return <p>{t('NOT_FOUND')}</p>
}

export default NotFoundPage
