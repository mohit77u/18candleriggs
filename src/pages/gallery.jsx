import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import AllImagesTab from '@/components/AllImagesTab'
import VenueImagesTab from '@/components/VenueImagesTab'
import EventsImagesTab from '@/components/EventsImagesTab'
import FoodsImagesTab from '@/components/FoodsImagesTab'
import Layout from '@/components/Layout'

function Gallery(props) {
  const [activeTab, setActiveTab] = useState('all')
 
  return (
    <>
      <Layout title={props.title}>
        {/* main */}
        <section className="gallery sm:px-12 px-7 py-16">
            <div className="tabs flex justify-center sm:gap-10 gap-3 border-b border-gray-100">
                <button className={`flex items-center sm:px-6 px-1 gap-2 pb-4 text-black text-[11px] sm:text-[16px] ${activeTab == 'all' ? "border-b-2 border-gray-800" : "border-b-2 border-transparent"}`} onClick={() => {setActiveTab('all')}}>
                    <Image src="/images/all.svg" className="sm:h-6 h-4" alt="all" width={22} height={20} />
                    <span>All</span>
                </button>
                <button className={`flex items-center sm:px-6 px-1 gap-2 pb-4 text-black text-[11px] sm:text-[16px] ${activeTab == 'venue' ? "border-b-2 border-gray-800" : "border-b-2 border-transparent"}`} onClick={() => {setActiveTab('venue')}}>
                    <Image src="/images/venue.svg" className="sm:h-6 h-4" alt="venue" width={25} height={24} />
                    <span>Venue</span>
                </button>
                <button className={`flex items-center sm:px-6 px-1 gap-2 pb-4 text-black text-[11px] sm:text-[16px] ${activeTab == 'events' ? "border-b-2 border-gray-800" : "border-b-2 border-transparent"}`} onClick={() => {setActiveTab('events')}}>
                    <Image src="/images/events.svg" className="sm:h-6 h-4" alt="events" width={25} height={24} />
                    <span>Events</span>
                </button>
                <button className={`flex items-center sm:px-6 px-1 gap-2 pb-4 text-black text-[11px] sm:text-[16px] ${activeTab == 'food' ? "border-b-2 border-gray-800" : "border-b-2 border-transparent"}`} onClick={() => {setActiveTab('food')}}>
                    <Image src="/images/food.svg" className="sm:h-6 h-4" alt="food" width={25} height={24} />
                    <span>Food</span>
                </button>
            </div>

            {/* all tabs content */}
            <div className="tab-all-content relative min-h-[60vh]">

              {/* tab content */}
              {activeTab == 'all' && (
                <AllImagesTab />
              )}
    
              {/* tab content */}
              {activeTab == 'venue' && (
                <VenueImagesTab />
              )}
    
              {/* tab content */}
              {activeTab == 'events'  && (
                <EventsImagesTab />
              )}
    
              {/* tab content */}
              {activeTab == 'food'  && (
                <FoodsImagesTab />
              )}
            </div>
        </section>
      </Layout>
    </>
  )
}

export default Gallery;

// static props
export async function getStaticProps() {
  return { 
    props: 
    { 
      title: 'Gallery Page',
    }
  }
}
