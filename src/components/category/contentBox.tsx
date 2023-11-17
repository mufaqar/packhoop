import Image from 'next/image'
import React from 'react'
import { FaCircleArrowRight } from 'react-icons/fa6'

function ContentBox({ Cstm_class, img }: any) {
    return (
        <div className={`flex lg:gap-24 gap-7 ${Cstm_class}`}>
            <div className='lg:w-1/2 w-full'>
                <Image src={img} alt='feature' width={580} height={440} className='w-full' />
            </div>
            <div className='lg:w-1/2 w-full'>
                <h3 className='text-2xl font-semibold text-title_Clr mb-4'>
                    Guests can easily manage their own gift cards
                </h3>
                <ul className='grid gap-5'>
                    <li>
                        <h3 className='text-base font-semibold text-txt_Clr flex items-center'>
                            <FaCircleArrowRight className="text-secondary w-10" />
                            Email and text gift cards are easy to buy and sell
                        </h3>
                        <p className='text-base font-normal text-txt_Clr pl-10'>
                            Allow guests to buy email gift cards and send via email or SMS, with a message of their choice.
                        </p>
                    </li>
                    <li>
                        <h3 className='text-base font-semibold text-txt_Clr flex items-center'>
                            <FaCircleArrowRight className="text-secondary w-10" />
                            Guests can schedule gift card sends
                        </h3>
                        <p className='text-base font-normal text-txt_Clr pl-10'>
                            Buying for a special occasion? Guests can schedule gift cards to send to the recipient at a specific date and time.
                        </p>
                    </li>
                    <li>
                        <h3 className='text-base font-semibold text-txt_Clr flex items-center'>
                            <FaCircleArrowRight className="text-secondary w-10" />
                            Gift card redemption is simple and easy
                        </h3>
                        <p className='text-base font-normal text-txt_Clr pl-10'>
                            Allow guests to pay with a gift card over the phone, when ordering online with Toast Online Ordering, or in person at the restaurant POS system or kiosk using a contactless QR code.
                        </p>
                    </li>
                    <li>
                        <h3 className='text-base font-semibold text-txt_Clr flex items-center'>
                            <FaCircleArrowRight className="text-secondary w-10" />
                            Online balance management is intuitive
                        </h3>
                        <p className='text-base font-normal text-txt_Clr pl-10'>
                            Allow guests to look up their gift card balance online, and even add more value to it, whenever they want.
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default ContentBox