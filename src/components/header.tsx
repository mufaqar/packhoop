import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { NavLinks } from '@/const/navlinks'
import { AiOutlineSearch } from 'react-icons/ai'
import { BsTelephone } from 'react-icons/bs'
import { FaBars } from 'react-icons/fa'

function Header() {
  return (
    <header className='py-4 border-b border-[#D9D9D987]'>
      <div className='container mx-auto md:px-0 px-4 flex gap-5 items-center justify-between'>
        <div className='lg:w-[20%] w-1/2'>
          <Link href="/">
            <Image src="/images/logo.png" alt='logo' width={190} height={42} />
          </Link>
        </div>
        <nav className='lg:w-[45%] w-1/2 flex items-center'>
          <button className='text-3xl lg:hidden block'>
            <FaBars />
          </button>
          <ul className='flex gap-7 items-center justify-center'>
            {NavLinks?.map((item: any, idx: number) => {
              return (
                <li key={idx}>
                  <Link href="#" className='text-base font-bold text-title_Clr'>
                    {item?.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className='lg:w-[35%] lg:flex gap-5 justify-between hidden'>
          <button className='lg:border-l border-l-0 border-[#D9D9D987] lg:pl-5'>
            <AiOutlineSearch className="text-xl" />
          </button>
          <div>
            <Link href="#" className='text-base font-bold text-title_Clr flex gap-1 items-center'>
              <BsTelephone className="text-3xl rotate-12" />
              <span className='grid'>
                <span className='text-sm font-normal text-[#12577E]'>
                  Live chat or:
                </span>
                +1 (321) 123 5678
              </span>
            </Link>
          </div>
          <Link href="#" className='bg-[#2B4FB9] px-8 py-4 text-sm font-semibold text-white rounded-[5px]'>
            Get a Free Quote
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header