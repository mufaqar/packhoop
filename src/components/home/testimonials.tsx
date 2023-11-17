import React from 'react'
import { FaStar } from 'react-icons/fa'

function Testimonials() {
    return (
        <section className='py-16 bg-[#F7F7F7]'>
            <div className='container mx-auto px-4'>
                <div className='grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-7'>
                    <div className='bg-white py-14 lg:px-12 px-5 rounded-[10px] shadow-[0_4px_63px_0_rgba(0,0,0,0.1)] hover:shadow-none'>
                        <div>
                            <h3 className='text-xl font-semibold text-title_Clr mb-4'>
                                MY ATHLETE BOX
                            </h3>
                            <p className='text-base font-normal text-txt_Clr'>
                                After much throughout searching, price, and quality comparison for custom-designed boxes, we decided to go with Company Name! Communication throughout the process was great, customer service was top-notch, and we have already recommended people to them because I was impressed with everything! Already looking forward to re-ordering!
                            </p>
                        </div>
                        <ul className='flex gap-1.5 mt-5'>
                            <li>
                                <FaStar className="text-orange-400" />
                            </li>
                            <li>
                                <FaStar className="text-orange-400" />
                            </li>
                            <li>
                                <FaStar className="text-orange-400" />
                            </li>
                            <li>
                                <FaStar className="text-orange-400" />
                            </li>
                            <li>
                                <FaStar className="text-orange-400" />
                            </li>
                        </ul>
                    </div>
                    <div className='bg-white py-14 lg:px-12 px-5 rounded-[10px] shadow-[0_4px_63px_0_rgba(0,0,0,0.1)] hover:shadow-none'>
                        <div>
                            <h3 className='text-xl font-semibold text-title_Clr mb-4'>
                                SIMPLICITY TEAS
                            </h3>
                            <p className='text-base font-normal text-txt_Clr'>
                                After much throughout searching, price, and quality comparison for custom-designed boxes, we decided to go with Company Name! Communication throughout the process was great, customer service was top-notch, and we have already recommended people to them because I was impressed with everything! Already looking forward to re-ordering!
                            </p>
                        </div>
                        <ul className='flex gap-1.5 mt-5'>
                            <li>
                                <FaStar className="text-orange-400" />
                            </li>
                            <li>
                                <FaStar className="text-orange-400" />
                            </li>
                            <li>
                                <FaStar className="text-orange-400" />
                            </li>
                            <li>
                                <FaStar className="text-orange-400" />
                            </li>
                            <li>
                                <FaStar className="text-orange-400" />
                            </li>
                        </ul>
                    </div>
                    <div className='bg-white py-14 lg:px-12 px-5 rounded-[10px] shadow-[0_4px_63px_0_rgba(0,0,0,0.1)] hover:shadow-none'>
                        <div>
                            <h3 className='text-xl font-semibold text-title_Clr mb-4'>
                                OVRY™
                            </h3>
                            <p className='text-base font-normal text-txt_Clr'>
                                After much throughout searching, price, and quality comparison for custom-designed boxes, we decided to go with Company Name! Communication throughout the process was great, customer service was top-notch, and we have already recommended people to them because I was impressed with everything! Already looking forward to re-ordering!
                            </p>
                        </div>
                        <ul className='flex gap-1.5 mt-5'>
                            <li>
                                <FaStar className="text-orange-400" />
                            </li>
                            <li>
                                <FaStar className="text-orange-400" />
                            </li>
                            <li>
                                <FaStar className="text-orange-400" />
                            </li>
                            <li>
                                <FaStar className="text-orange-400" />
                            </li>
                            <li>
                                <FaStar className="text-orange-400" />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonials