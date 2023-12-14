import { createSharedPathnamesNavigation } from 'next-intl/navigation'

export const locales = ['en', 'ru', 'uz']

export const { Link, redirect, usePathname, useRouter } = createSharedPathnamesNavigation({
  locales
})
