import { Inter } from 'next/font/google'
import MainBanner from '@/components/home/main'
import Packaging_Style from '@/components/home/packaging-style'
import HowIt_work from '@/components/home/howit-work'
import Packing_Design from '@/components/home/packing-design'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={``} >
      <MainBanner />
      <Packaging_Style />
      <HowIt_work />
      <Packing_Design />
    </main>
  )
}
