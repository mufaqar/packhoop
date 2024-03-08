import PageBanner from '@/components/page-banner'
import Link from 'next/link'
import React from 'react'
import Featured_Posts from '@/components/blog/featured-post'
import Image from 'next/image'

export default function Blogs() {
    return (
        <>
            <PageBanner title="Blogs" />
            <section className='md:py-16 py-8'>
                <div className='container mx-auto px-4 flex md:flex-row flex-col gap-7 md:divide-x divide-txt_Clr/50'>
                    <div className='md:w-2/3 w-full'>
                        {/* <h2 className='md:text-4xl text-xl font-semibold text-title_Clr mb-5'>
                            Our Blog
                        </h2> */}
                        <div>
                            <Featured_Posts />
                        </div>
                    </div>
                    <div className='md:w-1/3 w-full md:pl-10 md:block block'>
                        {/* <p className='text-end'>
                            <Link href="#" className='md:text-base text-xs font-medium text-primary underline hover:no-underline'>
                                View all
                            </Link>
                        </p>
                        <h2 className='md:text-3xl text-xl font-semibold text-title_Clr mb-5'>
                            Latest posts
                        </h2> */}
                        <div className='grid gap-5'>
                            {[0, 1, 2, 3].map(({ item, idx }: any) => {
                                return (
                                    <div key={idx} className='flex md:flex-row flex-col gap-2'>
                                        <div>
                                            <Image src="/images/make-product.png" alt='make-product' width={144} height={89} className='h-full w-full object-cover' />
                                        </div>
                                        <div className=''>
                                            <Link href="#" className='md:text-xl text-base font-medium text-title_Clr block w-fit'>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            </Link>
                                            <p className='md:text-base text-sm font-medium text-txt_Clr mt-1.5'>
                                                DEC 19, 2024
                                            </p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
