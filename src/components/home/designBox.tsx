import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function DesignBox({ title, img, slug }: any) {
    return (
        <Link href={`/${slug?.current}`} className='border pb-3 group'>
            <div className=''>
                <Image src={img} alt='pack/1' width={306} height={340} className='mx-auto cursor-pointer mb-4 group-hover:scale-105 transition-all duration-150 ease-linear' />
            </div>
            <div className='block mx-auto md:text-lg text-base font-semibold text-title_Clr text-center'>
                {title}
            </div>
        </Link>
    )
}

export default DesignBox