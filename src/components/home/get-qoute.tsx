import Image from 'next/image'
import React from 'react'

function Get_Qoute() {
    return (
        <section className=''>
            <div className='grid md:grid-cols-2 grid-cols-1'>
                <div className='bg-secondary py-10 px-5'>
                    <Image src="/images/get-qoute.png" alt='get-qoute' width={540} height={340} className='mx-auto' />
                </div>
                <div className='bg-[#F7F7F7] py-10 px-5'>
                    <div className='max-w-[480px] mx-auto'>
                        <h2 className='text-2xl font-semibold text-title_Clr'>
                            Get Custom Quote
                        </h2>
                        <p className='text-sm font-medium text-title_Clr mt-2'>
                        Fill out the form to get in touch with our dedicated packaging consultant
                        </p>
                        <form>

                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Get_Qoute