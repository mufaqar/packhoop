import Choose_Us from '@/components/category/choose-us'
import ContentBox from '@/components/category/contentBox'
import Cta from '@/components/category/cta'
import Cat_Faqs from '@/components/category/faqs'
import Get_Started from '@/components/category/get-started'
import Order_Process from '@/components/category/order-process'
import Technical_Specs from '@/components/category/technical-specs'
import Banner from '@/components/products/banner'
import Qoute_Sec from '@/components/products/qoute-sec'
import React from 'react'

export default function Product() {
    return (
        <main>
            <Banner />
            <Get_Started />
            <section className='py-16'>
                <div className='container mx-auto px-4 grid gap-16'>
                    <ContentBox
                        img="/images/post1.png"
                        Cstm_class="lg:flex-row flex-col"
                    />
                    <ContentBox
                        img="/images/post2.png"
                        Cstm_class="lg:flex-row-reverse flex-col"
                    />
                    <ContentBox
                        img="/images/post1.png"
                        Cstm_class="lg:flex-row flex-col"
                    />
                </div>
            </section>
            <Qoute_Sec />
            <Choose_Us />
            <Technical_Specs />
            <Cat_Faqs />
            <Order_Process />
            <Cta />
        </main>
    )
}
