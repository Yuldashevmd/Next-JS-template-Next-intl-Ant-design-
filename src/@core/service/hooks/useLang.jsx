import { useTranslations, useLocale } from 'next-intl'

export const useLang = () => {
  const t = useTranslations()
  const locale = useLocale()

  return {
    t,
    locale
  }
}
