import Head from 'next/head'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'
import Layout from '@/components/Layout'
import Content from '@/components/Content'
import { cardData, cardSlidesData } from '@/components/function'

export default function Home(props) {
  return (
    <>
        <Layout title={props.title}>

          {/* banner */}
          <section className="banner py-20 px-8 sm:px-14">
            <div className="bg-white/20 p-5 rounded">
              <div className="border-2 border-black rounded ms:p-5 p-2">
                <h1 className='text-center lg:py-28 md:py-20 py-12 text-white lg:text-6xl md:text-5xl sm:text-4xl text-xl md:leading-[65px] leading-[30px] font-alike'>The perfect night out in Glasgow ! <br />18 Candleriggs</h1>
              </div>
            </div>
          </section>

          {/* card */}
          <section className="what bg-white py-16 sm:px-14 px-8">
            {/* top */}
            <div className='flex items-center mb-7'>
              <h2 className='sm:text-3xl text-2xl text-black font-semibold md:text-left ml-auto text-center'>What's On At Glasgow's Coolest Event Space.</h2>
              <button className='md:flex hidden gap-2 items-center ml-auto relative'>
                <span>View All</span>
                <Image src="/images/arrow-right.png" alt="arrow" width={20} height={15} />
              </button>
            </div>
            {/* main cards */}
            <Content data={props.data} />
            {/* bottom more button */}
            <button className='w-auto block mx-auto my-12 bg-gray-900 text-white rounded-full px-8 py-2 font-semibold'>More Events</button>
          </section>
          
          {/* must see section */}
          <section className="must-see pb-8 sm:px-14 px-8">
            {/* top */}
            <div className='flex items-center mb-7'>
              <h2 className='sm:text-3xl text-2xl text-black font-semibold text-left mx-auto'>Must See Events</h2>
              <div className="flex items-center gap-3">
                <button className='flex gap-2 items-center ml-auto'>
                  <Image src="/images/arrow-left-circle.svg" alt="arrow" width={30} height={30} />
                </button>
                <button className='flex gap-2 items-center ml-auto'>
                  <Image src="/images/arrow-right-circle.svg" alt="arrow" width={30} height={30} />
                </button>
              </div>
            </div>
            {/* grids */}
            <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 mt-20 mb-6">
              {cardSlidesData?.map((card,index) => (
                <div className="card border border-gray-200 rounded-md relative" key={index}>
                  <div className="card-top">
                    <Image src={"/images/" + card.image} alt={"card_" + index} className='w-full object-cover min-h-[400px]' width={445} height={350} />
                  </div>
                  <div className="card-middle absolute top-0 left-0 justify-center bg-primary text-white flex gap-2 items-center w-full py-1.5 px-6 text-md">
                    <Image src="/images/calendar-white.svg" alt="calendar-white" width={14} height={15} />
                    <span>{card.date}</span>
                  </div>
                  <div className="card-body absolute bottom-0 left-0 w-full md:py-4 py-2 md:px-6 px-2 bg-black/50">
                    <h4 className='text-white font-semibold text-lg mb-2'>{card.title}</h4>
                    <p className='text-gray-100 text-sm leading-6'>{card.desc}</p>
                    <div className="grid grid-cols-2 gap-2 my-3">
                      <div className='tickets flex items-center gap-2'>
                        <Image src="/images/tickets-white.svg" alt="tickets" width={14} height={15} />
                        <span className='text-gray-100 text-sm'>Tickets</span>
                        <span className='text-gray-100 text-sm'>{card.tickets}</span>
                      </div>
                      <div></div>
                      <div className='tickets flex items-center gap-2'>
                        <Image src="/images/user-white.svg" alt="user" width={12} height={15} />
                        <span className='text-gray-100 text-sm'>Age: {card.age}</span>
                      </div>
                      <div className='tickets flex items-center gap-2'>
                        <Image src="/images/time-white.svg" alt="time" width={12} height={15} />
                        <span className='text-gray-100 text-sm'>{card.time}</span>
                      </div>
                    </div>

                    {/* bottom button */}
                    <button
                      className='text-md px-4 bg-yellow-300 py-2 rounded text-center block w-full mt-4 font-semibold'
                    >Book Tickets</button>
                  </div>
                </div>
              ))}
            </div>
          </section>

        </Layout>
        
    </>
  )
}

// static props
export const getStaticProps = async () => {
  let data = cardData;
  // Return the data as props
  return {
      props: {
        data,
        title: 'Home Page'
      },
  };

  // const data = await fetch(
  //     "https://jsonplaceholder.typicode.com/todos?_limit=10"
  //   ).then((response) => response.json());
  //   return {
  //     props: { data }
  //   };
};