import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router';
import React, { useState } from 'react'

export default function Header() {

  const router = useRouter();
  const [mobileMenu, setMobileMenu] = useState(false)

  return (
    <>
      <nav className="bg-primary border-gray-200 px-2 sm:px-4">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <Link href="/" className="flex items-center relative">
            <Image src="/images/logo.svg" className="" alt="Logo" width={94} height={90} />
          </Link>
          {/* search icon tablet */}
          <div className="relative mt-3 md:block lg:hidden hidden">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg className="w-5 h-5 text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
            </div>
            <input type="text" id="search-navbar" className="block sm:min-w-[300px] lg:min-w-[300px] xl:min-w-[350px] w-full p-2 pl-10 text-sm text-gray-200 border border-gray-700 rounded-full bg-transparent focus:ring-2 focus:ring-blue-500 focus:border-gray-700 focus:outline-none" placeholder="Search..." />
          </div>
          <div className="flex">
            <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" className="md:hidden text-gray-100  focus:outline-none focus:ring-4 focus:ring-gray-200 rounded-lg text-sm mr-1" >
              <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
              <span className="sr-only">Search</span>
            </button>
            {/* mobile search icon */}
            <div className="relative hidden lg:block">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg className="w-5 h-5 text-gray-100" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                <span className="sr-only">Search icon</span>
              </div>
              <input type="text" id="search-navbar" className="block p-2 pl-10 text-sm text-gray-200 border border-gray-700 rounded-full bg-transparent focus:ring-blue-500 focus:ring-2 focus:border-gray-700 focus:outline-none w-full sm:min-w-[300px] lg:min-w-[300px] xl:min-w-[350px]" placeholder="Search..." />
            </div>

            {/* toggle icon */}
            <button data-collapse-toggle="navbar-search" type="button" className="inline-flex items-center text-sm text-gray-100 rounded-lg lg:hidden focus:outline-none focus:ring-0 focus:ring-gray-200" aria-controls="navbar-search" aria-expanded="false" onClick={() => { setMobileMenu(!mobileMenu)}}>
              <span className="sr-only">Open menu</span>
              <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
            </button>
          </div>
          <div className="items-center justify-between hidden w-full lg:flex lg:w-auto" id="navbar-search">
            <div className="relative mt-3 lg:hidden">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg className="w-5 h-5 text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
              </div>
              <input type="text" id="search-navbar" className="block p-2 pl-10 text-sm text-gray-200 border border-gray-700 rounded-full bg-transparent focus:ring-blue-500 focus:ring-2 focus:border-gray-700 focus:outline-none w-full sm:min-w-[300px] lg:min-w-[300px] xl:min-w-[350px]" placeholder="Search..." />
            </div>
            {/* main menu */}
            <ul className="flex flex-col p-4 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
              <li>
                <Link href="/" className="block py-2 pl-3 pr-4 text-white md:bg-transparent md:p-0">Home</Link>
              </li>
              <li>
                <a href="#" className="block py-2 pl-3 pr-4 text-white md:bg-transparent md:p-0">What’s on</a>
              </li>
              <li>
                <Link href="/book-venue" className="block py-2 pl-3 pr-4 text-white md:bg-transparent md:p-0">Book Venue</Link>
              </li>
              <li>
                <a href="#" className="block py-2 pl-3 pr-4 text-white md:bg-transparent md:p-0">Menu</a>
              </li>
              <li>
              <Link href="/gallery" className="block py-2 pl-3 pr-4 text-white md:bg-transparent md:p-0">Gallery</Link>
              </li>
              <li>
                <a href="#" className="block py-2 pl-3 pr-4 text-white md:bg-transparent md:p-0">About Us</a>
              </li>
              <li>
                <a href="#" className="block py-2 pl-3 pr-4 text-white md:bg-transparent md:p-0">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* mobile menu */}
      {mobileMenu && (
        <div className="mobile-menus fixed top-0 left-0 bg-primary p-5 w-[300px] h-full z-50" onClick={() => {setMobileMenu(false)}}>
          <ul className='flex flex-col gap-y-3'>
            <li>
              <Link href="/" className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:p-0 dark:text-white" aria-current="page">Home</Link>
            </li>
            <li>
              <a href="#" className="block py-2 pl-3 pr-4 text-white rounded md:hover:bg-transparent md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">What’s on</a>
            </li>
            <li>
              <Link href="/book-venue" className="block py-2 pl-3 pr-4 text-white rounded md:hover:bg-transparent md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Book Venue</Link>
            </li>
            <li>
              <a href="#" className="block py-2 pl-3 pr-4 text-white rounded md:hover:bg-transparent md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Menu</a>
            </li>
            <li>
            <Link href="/gallery" className="block py-2 pl-3 pr-4 text-white rounded md:hover:bg-transparent md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Gallery</Link>
            </li>
            <li>
              <a href="#" className="block py-2 pl-3 pr-4 text-white rounded md:hover:bg-transparent md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About Us</a>
            </li>
            <li>
              <a href="#" className="block py-2 pl-3 pr-4 text-white rounded md:hover:bg-transparent md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact Us</a>
            </li>
          </ul>
        </div>
      )}
    </>
  )
}
