import Banner from '@/components/category/banner'
import Choose_Us from '@/components/category/choose-us'
import ContentBox from '@/components/category/contentBox'
import Cta from '@/components/category/cta'
import Cat_Faqs from '@/components/category/faqs'
import Get_Started from '@/components/category/get-started'
import Order_Process from '@/components/category/order-process'
import Technical_Specs from '@/components/category/technical-specs'
import DesignBox from '@/components/home/designBox'
import React from 'react'
import { useRouter } from 'next/router'
import { urlForImage } from '../../../sanity/lib/image'

export default function Category({ categoryRes, productsRes, faqRes }: any) {
    console.log("🚀 ~ file: index.tsx:17 ~ Category ~ faqRes:", faqRes)
    const { query } = useRouter()
    const relatedProducts = productsRes?.filter((item: any) => item.categories?.slug?.current === query.slug)

    return (
        <main>
            <Banner data={categoryRes} />
            <Get_Started data={categoryRes} />
            <section className='py-16'>
                <div className='container mx-auto px-4 grid gap-16'>
                    {
                        categoryRes.grid?.map((item: any, idx: number) => (
                            <ContentBox
                                img={urlForImage(item?.image.asset._ref).width(306)?.url()}
                                Cstm_class={` ${idx%2 === 0 ? 'lg:flex-row flex-col' : 'lg:flex-row-reverse flex-col'}`}
                                key={idx}
                                title={item.title}
                                list={item.list}
                            />
                        ))
                    }

                </div>
            </section>
            <section className='py-16'>
                <div className='container mx-auto px-4'>
                    <div>
                        <h2 className='md:text-4xl text-3xl font-semibold text-title_Clr'>
                            Mailer Boxes Products
                        </h2>
                    </div>
                    <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-7 mt-10'>
                        {
                            relatedProducts?.map((product: any, i: number) => (
                                <DesignBox
                                    key={i}
                                    slug={product.slug}
                                    title={product.title}
                                    img={urlForImage(product?.image.asset._ref).width(306)?.url()}
                                />
                            ))
                        }
                    </div>
                </div>
            </section>
            <Choose_Us />
            <Cat_Faqs faqRes={faqRes}/>
            <Order_Process />
            <Cta />
        </main>
    )
}
