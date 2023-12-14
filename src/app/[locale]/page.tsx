import Header from '@/@core/components/Header'
import Footer from '@/@core/components/Footer'
import Main from '@/@core/components/pages/main'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home page'
}
export default function Home() {
  return (
    <main>
      <Header />
      <Main />
      <Footer />
    </main>
  )
}
