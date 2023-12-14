import { NextIntlClientProvider, useMessages } from 'next-intl'
import { MainContext } from '@/@core/service/context/main'
import StyledComponentsRegistry from '@/lib/AntdRegistry'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact-center',
  description: 'This is basic web app for Contact center'
}

const RootLayout = ({ children, params: { locale } }: { children: React.ReactNode; params: any }) => {
  const messages = useMessages()

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <MainContext>
            <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
          </MainContext>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}

export default RootLayout
