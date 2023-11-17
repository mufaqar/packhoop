import Banner from '@/components/category/banner'
import ContentBox from '@/components/category/contentBox'
import Get_Started from '@/components/category/get-started'
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
        </main>
    )
}
