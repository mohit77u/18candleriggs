import Head from 'next/head'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'
import Image from 'next/image'
import Layout from '@/components/Layout'


function BookVenue(props) {
  return (
    <>
     <Layout title={props.title}>

      {/* banner */}
      <section className="venue-banner py-12 sm:px-12 px-5">
        <div className="venue grid grid-cols-2">
          <div className="left">
            <div className="p-5 bg-yellow-300">
              <h2 className='md:text-4xl text-lg text-gray-800 mb-3 font-Rochester'>At 18 Candleriggs we make it happen</h2>
              <Image src="/images/venue-1.jpg" alt="venue 1" width={670} height={415} />
            </div>
          </div>
          <div className="right mt-[100px] sm:ml-[-100px] ml-[-50px] z-[-1]">
            <div className="p-5 bg-green-900">
              <Image src="/images/venue-2.jpg" alt="venue 2" width={850} height={415} />
              <h2 className='font-Rochester md:text-4xl text-lg text-yellow-300 mt-3'>Events are the name of the game</h2>
            </div>
          </div>
        </div>
      </section>

      {/* book */}
      <section className="book sm:px-12 px-6 py-8">
        <h2 className="text-center text-2xl sm:text-3xl font-semibold mb-12">Book venue</h2>

        <div className="book-details grid md:grid-cols-2 grid-cols-1 gap-6 mt-6">
          <div></div>
          <div className='bg-black/60 py-6 px-12'>
            <p className='text-white text-lg font-medium mb-8 leading-8 text-center'>A one-stop cabaret lounge in the heart of Merchant City, 18 Candleriggs (formerly known as Wild Cabaret) knows no bounds when it comes to unique dabbles, daring nights and dashing shows.</p>
            <p className='text-white text-lg font-medium mb-8 leading-8 text-center'>Echoing its eccentric entertainment, the decor is markedly Art Deco. Gilded in gold, with a bar boasting its name up in Hollywood-style lights, these two spaces epitomize showbiz and glistening sass. Sashay down to a table of baroque seats and let the show commence.</p>
            <p className='text-white text-lg font-medium mb-8 leading-8 text-center'>Events are the name of the game at 18 Candelriggs, where live music and cabaret reign supreme. From burlesque shows and circus troupes to comedy nights and luxe shows, it's at the top of its game when it comes to providing guests with a wholly unique drinking and dining experience in the city. Top hats? Sparkles? And feather boas? These all come as standard.</p>
          </div>
        </div>

        <p className='my-12 text-lg text-black font-semibold text-center'>Our beautiful and inviting atmosphere will make your guests feel at home, no matter what type of event you're hosting. Whether you're planning a corporate event, a wedding reception, or a private party, booking with us is simple and straightforward. Contact us today and our team will guide you through every step of the process, from choosing the perfect date to finalizing all the details. We'll work together to make sure your event is exactly what you envision.</p>

        <button className='w-auto mx-auto block bg-yellow-300 text-black font-semibold rounded-full px-6 py-2'>Contact Us</button>
      </section>

      {/* bottom section */}
      <section className="py-12 sm:px-12 px-8">
        <div className="grid md:grid-cols-2 gap-6 bg-primary p-8">
          <div className='grid sm:grid-cols-2 grid-cols-1 gap-6'>
            <div>
              <Image src="/images/grid-1.png" alt="grid" className='mb-6 w-full sm:h-[350px]' width={320} height={340} />
              <Image src="/images/grid-1-1.png" alt="grid" className='w-full sm:h-[250px]' width={320} height={250} />
            </div>
            <div>
              <Image src="/images/grid-2.png" alt="grid" className='mb-6 w-full sm:h-[250px]' width={320} height={250} />
              <Image src="/images/grid-2-2.png" alt="grid" className='w-full sm:h-[350px]' width={320} height={340} />
            </div>
          </div>
          <div>
            <Image src="/images/grid-2-main.png" alt="grid" className='sm:h-[625px] w-full' width={650} height={625} />
          </div>
        </div>

      </section>

      </Layout>

    </>
  )
}

export default BookVenue;

// static props
export async function getStaticProps() {
  return { 
    props: 
    { 
      title: 'Book Venue Page',
    }
  }
}

