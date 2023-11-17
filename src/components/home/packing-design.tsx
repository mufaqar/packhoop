import React from 'react'
import DesignBox from './designBox'
import { urlForImage } from '../../../sanity/lib/image'

function Packing_Design({ data }: any) {
    return (
        <section className='py-16'>
            <div className='container mx-auto px-4'>
                <div>
                    <h2 className='md:text-4xl text-3xl font-semibold text-title_Clr text-center'>
                        Custom Packaging Boxes
                    </h2>
                    <p className='text-lg font-normal text-txt_Clr text-center max-w-[800px] mx-auto mt-5'>
                        Choose a packaging style for your custom boxes, start designing with us, and get your boxes with the most advanced printing techniques.
                    </p>
                </div>
                <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-7 mt-10'>
                    {
                        data.map((product: any, i: number) => (
                            <DesignBox
                                key={i}
                                title={product.title}
                                img={urlForImage(product?.image.asset._ref).width(306).url()}
                            />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Packing_Design