import React from 'react'
import PackingBox from './packingBox'

function Packaging() {
    return (
        <section className='py-16'>
            <div className='container mx-auto px-4'>
                <div>
                    <h2 className='md:text-4xl text-3xl font-semibold text-title_Clr text-center'>
                        Select Your Custom Packaging Style
                    </h2>
                    <p className='text-lg font-normal text-txt_Clr text-center max-w-[800px] mx-auto mt-5'>
                        Choose a packaging style for your custom boxes, start designing with us, and get your boxes with the most advanced printing techniques.
                    </p>
                </div>
                <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-7 mt-10'>
                    <PackingBox
                        title="Mailer Boxes"
                        content="A stylish and durable corrugated mailer box that is great for shipping. An ideal choice for subscription boxes, gift boxes, and e-commerce packaging."
                        img="/images/pack/1.png"
                    />
                    <PackingBox
                        title="Rigid Boxes"
                        content="Durable and sturdy packaging solutions that offer a high-end look. Perfect for luxury products, gifts, and upscale brands in need of premium packaging."
                        img="/images/pack/2.png"
                    />
                    <PackingBox
                        title="Product Boxes"
                        content="A slim box style used to hold and present a product made from an SBS paperboard. An ideal choice for retail products like chocolate, cosmetics, etc."
                        img="/images/pack/3.png"
                    />
                    <PackingBox
                        title="Shipping Boxes"
                        content="Our custom shipping boxes made of strong corrugated cardboard are incredibly sturdy and long-lasting. Best for shipping large or heavy items."
                        img="/images/pack/1.png"
                    />
                </div>
            </div>
        </section>
    )
}

export default Packaging