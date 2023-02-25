import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React, { useState } from 'react'

export default function gallery() {
    const [activeTab, setActiveTab] = useState('all')

  return (
    <>
        {/* header */}
        <Header />

        {/* main */}
        <section className="gallery sm:px-12 px-7 py-16">
            <div className="tabs flex justify-center sm:gap-10 gap-3 border-b border-gray-100">
                <button className={`flex items-center sm:px-6 px-1 gap-2 pb-4 text-black text-[11px] sm:text-[16px] ${activeTab == 'all' ? "border-b-2 border-gray-800" : "border-b-2 border-transparent"}`} onClick={() => {setActiveTab('all')}}>
                    <img src="/images/all.svg" className="sm:h-6 h-4" alt="all" />
                    <span>All</span>
                </button>
                <button className={`flex items-center sm:px-6 px-1 gap-2 pb-4 text-black text-[11px] sm:text-[16px] ${activeTab == 'venue' ? "border-b-2 border-gray-800" : "border-b-2 border-transparent"}`} onClick={() => {setActiveTab('venue')}}>
                    <img src="/images/venue.svg" className="sm:h-6 h-4" alt="venue" />
                    <span>Venue</span>
                </button>
                <button className={`flex items-center sm:px-6 px-1 gap-2 pb-4 text-black text-[11px] sm:text-[16px] ${activeTab == 'events' ? "border-b-2 border-gray-800" : "border-b-2 border-transparent"}`} onClick={() => {setActiveTab('events')}}>
                    <img src="/images/events.svg" className="sm:h-6 h-4" alt="events" />
                    <span>Events</span>
                </button>
                <button className={`flex items-center sm:px-6 px-1 gap-2 pb-4 text-black text-[11px] sm:text-[16px] ${activeTab == 'food' ? "border-b-2 border-gray-800" : "border-b-2 border-transparent"}`} onClick={() => {setActiveTab('food')}}>
                    <img src="/images/food.svg" className="sm:h-6 h-4" alt="food" />
                    <span>Food</span>
                </button>
            </div>

            {/* tab content */}
            {activeTab == 'all' && (
                <div className="tab-content mt-12">
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
                        <div className="left">
                            <img src="/images/gallery-1.png" alt="gallery" className='w-full' />
                            <div className="grid sm:grid-cols-2 grid-cols-1 gap-6 mt-8">
                                <div className="left">
                                    <img src="/images/gallery-1-2.png" alt="gallery" className='w-full' />
                                    <img src="/images/gallery-1-3.png" alt="gallery" className='w-full mt-8' />
                                </div>
                                <div className="right">
                                    <img src="/images/gallery-1-4.png" alt="gallery" className='w-full' />
                                    <img src="/images/gallery-1-5.png" alt="gallery" className='w-full mt-8' />
                                </div>
                            </div>
                        </div>
                        <div className="right">
                            <div className="grid sm:grid-cols-2 grid-cols-1 gap-6">
                                <div className="left">
                                    <img src="/images/gallery-2-2.png" alt="gallery" className='w-full' />
                                    <img src="/images/gallery-2-3.png" alt="gallery" className='w-full mt-8' />
                                </div>
                                <div className="right">
                                    <img src="/images/gallery-2-4.png" alt="gallery" className='w-full' />
                                    <img src="/images/gallery-2-5.png" alt="gallery" className='w-full mt-8' />
                                </div>
                            </div>
                            <img src="/images/gallery-2.png" alt="gallery" className='w-full mt-8' />
                        </div>
                    </div>

                </div>
            )}
        </section>
        {/* footer */}
        <Footer />
    </>
  )
}
