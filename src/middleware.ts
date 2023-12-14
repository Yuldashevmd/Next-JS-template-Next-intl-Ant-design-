// import { NextRequest, NextResponse } from 'next/server'

// export function middleware(req: NextRequest) {
//   const token = req.cookies.get('access_token')

//   if (!token) {
//     const url = new URL('/login', req.url)
//     url.searchParams.set('from', req.nextUrl.pathname)

//     return NextResponse.redirect(url)
//   }

//   // Allow access to the page
//   return NextResponse.next()
// }
// export const config = {
//   matcher: '/dashboard'
// }

// i18n middleware
import createMiddleware from 'next-intl/middleware'
import { locales } from './navigation'

export default createMiddleware({
  locales,
  defaultLocale: 'en',
  localePrefix: 'as-needed'
})

export const config = {
  matcher: ['/((?!_next|.*\\..*).*)']
}
