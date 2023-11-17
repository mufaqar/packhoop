import Link from 'next/link'
import React from 'react'

function Get_Started() {
    return (
        <section className='py-16'>
            <div className='container mx-auto px-4'>
                <div>
                    <h2 className='md:text-4xl text-3xl font-semibold text-title_Clr text-center'>
                        Get Started with Custom Mailer Boxes
                    </h2>
                    <p className='text-lg font-normal text-txt_Clr max-w-[890px] mx-auto mt-5'>
                        The use of mailer boxes is an excellent option for ecommerce packaging, gifts, retail, and for subscription boxes. These boxes will make an impression on customers during the unboxing experience and deliver a WOW factor.
                    </p>
                    <p className='text-lg font-normal text-txt_Clr max-w-[890px] mx-auto mt-5'>
                        Businesses can choose from various mailer box sizes to meet their specific needs, whether a company needs a small box to ship a single item or a large box to ship multiple items.
                    </p>
                </div>
                <div className='mt-10 flex justify-center gap-3'>
                    <Link href="#" className='bg-primary hover:bg-white px-8 py-4 text-sm font-semibold text-white hover:text-primary block w-[193px] text-center border border-primary rounded-[5px]'>
                        Request for Quote
                    </Link>
                    <Link href="#" className='bg-white hover:bg-primary px-8 py-4 text-sm font-semibold text-primary hover:text-white block w-[193px] text-center border border-primary rounded-[5px]'>
                        Call US Now
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Get_Started