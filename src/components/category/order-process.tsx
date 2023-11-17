import React from 'react'
import OrderBox from './orderBox'

function Order_Process() {
    return (
        <section className='py-16 bg-[#F7F7F7]'>
            <div className='container mx-auto px-4'>
                <div>
                    <h2 className='md:text-4xl text-3xl font-semibold text-title_Clr'>
                        Mailer Box Ordering Process
                    </h2>
                    <p className='text-lg font-normal text-txt_Clr mt-5'>
                        A simple, 6-step process for getting custom mailer boxes, with dedicated support and ongoing consulting every step of the way.
                    </p>
                </div>
                <div className='grid md:grid-cols-3 grid-cols-1 gap-7 mt-10'>
                    <OrderBox
                        title="1. Get a quote"
                        content="Go to Company name to customize your mailer boxes and get an instant quote." />
                    <OrderBox
                        title="2. Purchase a sample (optional)"
                        content="Get a sample of your mailer box to test size and quality before starting a bulk order." />
                    <OrderBox
                        title="3. Place your order"
                        content="Choose your preferred shipping method and place your production order on our platform." />
                    <OrderBox
                        title="4. Upload artwork"
                        content="Add your artwork to the dieline template that we tailor make to your box specifications." />
                    <OrderBox
                        title="5. Start production"
                        content="Once your artwork is approved, we'll start production, which typically takes 12-16 days." />
                    <OrderBox
                        title="6. Ship packaging"
                        content="After passing quality assurance, we'll ship your packaging to your specified location(s)." />
                </div>
            </div>
        </section>
    )
}

export default Order_Process