import React from 'react'

export default function Footer() {
  return (
    <>
        <footer className='bg-primary px-2 sm:px-4 py-8'>
            {/* top menus and logo */}
            <div className="flex justify-between items-center sm:px-8">
                <div className="logo">
                    <a href="/">
                        <img src="/images/logo.svg" alt="logo" />
                    </a>
                </div>

                <div className="menu">
                    <ul class="flex items-center justify-center gap-x-8">
                        <li>
                            <a href="#" class="block text-[16px] py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:p-0 dark:text-white" aria-current="page">Home</a>
                        </li>
                        <li>
                            <a href="#" class="block text-[16px] py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">What’s on</a>
                        </li>
                        <li>
                            <a href="#" class="block text-[16px] py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Book Venue</a>
                        </li>
                        <li>
                            <a href="#" class="block text-[16px] py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Menu</a>
                        </li>
                        <li>
                            <a href="#" class="block text-[16px] py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Gallery</a>
                        </li>
                    </ul>
                </div>

                <div className="social flex gap-3">
                    <a href="/">
                        <img src="/images/facebook.png" alt="fb" />
                    </a>
                    <a href="/">
                        <img src="/images/instagram.png" alt="insta" />
                    </a>
                </div>
            </div>

            {/* bottom menus */}
            <div className="bottom mt-8 sm:px-8">
                <div className="flex justify-between items-start">
                    <div className="left lg:w-7/12 md:w-6/12 w-full p-4 sm:pr-16">
                        <div className="box px-10 py-10 rounded border border-yellow-300">
                            <div className="search-box">
                                <h3 className='text-xl text-white font-semibold mb-3'>Get Event Updates</h3>
                                <div className="search-main flex items-center p-3 bg-white rounded">
                                    <input type="text" placeholder='Admin123@gmail.com' className='text-gray-500 border-0 w-full px-4 py-2 focus:ring-0 focus:outline-none' />
                                    <button className='bg-yellow-300 text-gray-700 text-md px-4 py-2 rounded'>Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="middle lg:w-3/12 md:w-3/12 w-full p-2">
                        <h3 className='text-xl text-white font-semibold mb-1'>Contact Us</h3>
                        <ul>
                            <li className='flex items-center gap-3 py-2'>
                                <img src="/images/mail.png" alt="mail" />
                                <span className='text-gray-300 text-sm'>events@18candleriggs.com</span>
                            </li>
                            <li className='flex items-center gap-3 py-2'>
                                <img src="/images/phone.png" alt="phone" />
                                <span className='text-gray-300 text-sm'>0330 202 1818</span>
                            </li>
                        </ul>
                    </div>

                    <div className="last lg:w-2/12 md:w-3/12 w-full p-2">
                        <h3 className='text-xl text-white font-semibold mb-1'>Privacy</h3>
                        <ul>
                            <li className='py-2'>
                                <a href='#' className='text-gray-300 text-sm'>Terms & Conditions</a>
                            </li>
                            <li className='py-2'>
                                <a href='#' className='text-gray-300 text-sm'>Privacy Policy</a>
                            </li>
                            <li className='py-2'>
                                <a href='#' className='text-gray-300 text-sm'>About Us</a>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>

            {/* bottom text */}
            <div className="bottom-text text-right mb-4 sm:px-8">
                <p className='text-gray-500 text-sm'>©  18 candleriggs 2022</p>
            </div>
        </footer>
    </>
  )
}
