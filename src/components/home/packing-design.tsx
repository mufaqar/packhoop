import React from 'react'
import DesignBox from './designBox'

function Packing_Design() {
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
                    <DesignBox
                        title="TUCK BOXES"
                        img="/images/design/9.png"
                    />
                    <DesignBox
                        title="CBD Boxes"
                        img="/images/design/10.png"
                    />
                    <DesignBox
                        title="RIGID BOXES"
                        img="/images/design/11.png"
                    />
                    <DesignBox
                        title="MYLAR BAGS"
                        img="/images/design/12.png"
                    />
                </div>
            </div>
        </section>
    )
}

export default Packing_Design