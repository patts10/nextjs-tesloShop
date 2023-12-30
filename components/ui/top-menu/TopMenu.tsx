'use client'

import { titleFont } from '@/config/fonts'
import { useUIStore } from '@/store'
import Link from 'next/link'
import { IoCartOutline, IoSearchOutline } from 'react-icons/io5'

export const TopMenu = () => {

  const openSideMenu = useUIStore((state) => state.openSideMenu)

  return (
    <nav className='flex px-5 justify-between items-center w-full'>
      <div>
        <Link href='/'>
          <span className={`${titleFont.className} antialiased font-bold`}>
            Teslo
          </span>
          <span className={`${titleFont.className} antialiased font-bold`}>
            | Shop
          </span>
        </Link>
      </div>

      <div className='hidden sm:block'>
        <Link
          className='m-2 p-2 rounded-md transition-all hover:bg-gray-100'
          href='/category/men'
        >
          Men
        </Link>
        <Link
          className='m-2 p-2 rounded-md transition-all hover:bg-gray-100'
          href='/category/women'
        >
          Women
        </Link>
        <Link
          className='m-2 p-2 rounded-md transition-all hover:bg-gray-100'
          href='/category/kids'
        >
          Kids
        </Link>
      </div>

      <div className='flex items-center'>
        <Link href='/search' className='mx-2'>
          <IoSearchOutline className='size-5' />
        </Link>

        <Link href='/cart' className='mx-2'>
          <div className='relative'>
            <span className='absolute text-xs rounded-full font-bold px-1 -top-2 -right-2 bg-blue-700 text-white'>
              3
            </span>
            <IoCartOutline className='size-5' />
          </div>
        </Link>

        <button
          className='m-2 p-2 rounded-md transition-all hover:bg-gray-100'
          onClick={openSideMenu}
        >
          Menu
        </button>
      </div>
    </nav>
  )
}
