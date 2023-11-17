import Image from 'next/image'
import React from 'react'
import Qoute_Form from '../category/qoute-form'

function Banner() {
    return (
        <section className='h-full pt-20'>
            <div className='container mx-auto px-4 grid lg:grid-cols-2 grid-cols-1 gap-7'>
                <div>
                    <h1 className='md:text-5xl text-3xl font-semibold text-title_Clr'>
                        Kraft Mailer Boxes
                    </h1>
                    <p className='text-lg leading-6 my-5 max-w-[510px]'>
                        Ship your products in the latest trendy and safe mailer boxes customized uniquely to make a good impression of your brand.
                    </p>
                    <Image src="/images/category-baner.png" alt='category-baner' width={534} height={400} className='mx-auto' />
                </div>
                <div>
                    <Qoute_Form />
                </div>
            </div>
        </section>
    )
}

export default Banner