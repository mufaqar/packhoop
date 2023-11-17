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

export default function Category() {
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
            <section className='py-16'>
                <div className='container mx-auto px-4'>
                    <div>
                        <h2 className='md:text-4xl text-3xl font-semibold text-title_Clr'>
                            Mailer Boxes Products
                        </h2>
                    </div>
                    <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-7 mt-10'>
                        <DesignBox
                            title="COSMETIC BOXES"
                            img="/images/design/1.png"
                        />
                        <DesignBox
                            title="MAILER BOXES"
                            img="/images/design/2.png"
                        />
                        <DesignBox
                            title="CANDLE BOXES"
                            img="/images/design/3.png"
                        />
                        <DesignBox
                            title="CANDLE BOXES"
                            img="/images/design/4.png"
                        />
                        <DesignBox
                            title="DISPLAY BOXES"
                            img="/images/design/5.png"
                        />
                        <DesignBox
                            title="BEVERAGE BOXES"
                            img="/images/design/6.png"
                        />
                        <DesignBox
                            title="ECO FRIENDLY BOXES"
                            img="/images/design/7.png"
                        />
                        <DesignBox
                            title="GIFT BOXES"
                            img="/images/design/8.png"
                        />
                    </div>
                </div>
            </section>
            <Choose_Us />
            <Technical_Specs />
            <Cat_Faqs />
            <Order_Process />
            <Cta />
        </main>
    )
}
