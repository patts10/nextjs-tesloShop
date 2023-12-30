'use client'

import Link from 'next/link'
import {
  IoCloseOutline,
  IoLogInOutline,
  IoLogOutOutline,
  IoPeopleOutline,
  IoPersonOutline,
  IoSearchOutline,
  IoShirtOutline,
  IoTicketOutline
} from 'react-icons/io5'

export const Sidebar = () => {
  return (
    <div className=''>
      {/* Background black */}
      <div className='fixed top-0 left-0 w-screen z-10 bg-black opacity-30'></div>

      {/* blur */}
      <div className='fade-in fixed top-0 left-0 w-screen h-screen z-10 backdrop-blur-sm'>
        {/* Sidemenu */}
        <nav className='fixed p-5 right-0 top-0 w-[500px] h-screen bg-white z-20 shadow-2xl transform transition-all duration-300'>
          <IoCloseOutline
            size={50}
            className='absolute top-5 right-5 cursor-pointer'
            onClick={() => console.log('close')}
          />

          {/* input */}
          <div className='relative mt-14'>
            <IoSearchOutline size={20} className='absolute top-2 left-2' />
            <input
              type='text'
              placeholder='Search'
              className='w-full bg-gray-50 rounded py-1 px-10 border-b-2 text-xl border-gray-200 focus:outline-none focus:border-blue-500'
            />
          </div>

          {/* Menu options */}

          <Link
            href={'/'}
            className='flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all'
          >
            <IoPersonOutline size={30} />
            <span className='ml-3 text-xl'>Profile</span>
          </Link>

          <Link
            href={'/'}
            className='flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all'
          >
            <IoTicketOutline size={30} />
            <span className='ml-3 text-xl'>Orders</span>
          </Link>

          <Link
            href={'/'}
            className='flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all'
          >
            <IoLogInOutline size={30} />
            <span className='ml-3 text-xl'>Log In</span>
          </Link>

          <Link
            href={'/'}
            className='flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all'
          >
            <IoLogOutOutline size={30} />
            <span className='ml-3 text-xl'>Log Out</span>
          </Link>

          {/* Line separator */}
          <div className='w-full h-px bg-gray-200 my-10'>
            <Link
              href={'/'}
              className='flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all'
            >
              <IoShirtOutline size={30} />
              <span className='ml-3 text-xl'>Products</span>
            </Link>

            <Link
              href={'/'}
              className='flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all'
            >
              <IoTicketOutline size={30} />
              <span className='ml-3 text-xl'>Orders</span>
            </Link>

            <Link
              href={'/'}
              className='flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all'
            >
              <IoPeopleOutline size={30} />
              <span className='ml-3 text-xl'>Users</span>
            </Link>
          </div>
        </nav>
      </div>
    </div>
  )
}
