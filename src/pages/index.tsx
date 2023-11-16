import { Inter } from 'next/font/google'
import MainBanner from '@/components/home/main'
import Packaging from '@/components/home/packaging'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={``} >
      <MainBanner />
      <Packaging />
    </main>
  )
}
