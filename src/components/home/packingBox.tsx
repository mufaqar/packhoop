import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function PackingBox({title,content,img} : any) {
    return (
        <div>
            <div className='bg-[#F7F7F7]'>
                <Image src={img} alt='pack/1' width={306} height={340} className='mx-auto mb-4' />
            </div>
            <Link href="#" className='block mx-auto md:text-2xl text-xl font-semibold text-title_Clr text-center'>
               {title}
            </Link>
            <p className='text-base font-normal text-txt_Clr text-center mt-5'>
{content}
            </p>
        </div>
    )
}

export default PackingBox