import { Inter } from 'next/font/google'
import MainBanner from '@/components/home/main'
import Packaging_Style from '@/components/home/packaging-style'
import HowIt_work from '@/components/home/howit-work'
import Packing_Design from '@/components/home/packing-design'
import Why_ChooseUs from '@/components/home/why-choose'
import Testimonials from '@/components/home/testimonials'
import Faqs from '@/components/home/faqs'
import Get_Qoute from '@/components/home/get-qoute'
import { client } from '../../sanity/lib/client'
import {Qcategories, Qfaqs, Qproducts, Qtestimonials} from '../../sanity/queries'

const inter = Inter({ subsets: ['latin'] })

export default function Home({testimonialsRes, faqRes, categoriesRes, productsRes}:any) {

  return (
    <main className={``} >
      <MainBanner />
      <Packaging_Style data={categoriesRes}/>
      <HowIt_work />
      <Packing_Design data={productsRes}/>
      <Why_ChooseUs />
      <Testimonials data={testimonialsRes}/>
      <Faqs data={faqRes}/>
      <section className='py-16'>
        <div className='container mx-auto px-4'>
          <div>
            <h2 className='md:text-4xl text-3xl font-semibold text-title_Clr'>
              Why Custom Packaging Essential for Your Business
            </h2>
            <p className='text-lg font-normal text-txt_Clr mt-5'>
              We live in a fast-paced world where advancements in technology have allowed people to make informed decisions and better choices. Today, nearly everyone uses a smartphone or laptop to know about consumer products and all other details that will help them make best buying decision. In the business sector, due to significant competition, there is a clear shift from product-centric to a customer-centric approach. Another reason for the shift is ambitious entrepreneurs and small-businessmen running their own brands to better serve the customers.
            </p>
            <p className='text-lg font-normal text-txt_Clr mt-5'>
              We all know the famous 4 Ps of marketing (Product, Price, Place, and Promotion). However, another P that has been added to the mix is Packaging. According to research studies, an average consumer takes less than 20 seconds to make a buying decision. Also, almost 72% of the population says that their buying decision is influenced by the packaging design.
            </p>
            <p className='text-lg font-normal text-txt_Clr mt-5'>
              The first thing that allows the average consumer to make the purchase decision is none other than the ‘packaging of the product. People usually buy from brands there are familiar with, such as startups, and business companies have to think out of the box to make an impression on potential customers.
            </p>
          </div>
        </div>
      </section>
      <Get_Qoute />
    </main>
  )
}



export async function getServerSideProps() {
  const testimonialsRes = await client.fetch(Qtestimonials);
  const faqRes = await client.fetch(Qfaqs);
  const categoriesRes = await client.fetch(Qcategories);
  const productsRes = await client.fetch(Qproducts);
  return {
    props: {
      testimonialsRes, faqRes, categoriesRes, productsRes,
      preview: true
    }
  };
}