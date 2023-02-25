import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'

export default function bookVenue() {
  return (
    <>
      {/* header */}
      <Header />

      {/* main content */}
      {/* banner */}
      <section className="venue-banner py-12 sm:px-12 px-5">
        <div className="venue grid grid-cols-2">
          <div className="left p-5 bg-yellow-300">
            <img src="/images/venue-1.jpg" alt="venue 1" />
          </div>
          <div className="right p-5 bg-green-900">
            <img src="/images/venue-2.jpg" alt="venue 2" />
          </div>
        </div>
      </section>

      {/* footer */}
      <Footer />
    </>
  )
}
