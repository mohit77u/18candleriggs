import Image from "next/image";
import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { cardData } from "./function";

const Content = ({ data }) =>
{
  const [ cardDetails, setCardDetails ] = useState(data);
  const [ hasMore, setHasMore ] = useState(true);

  const getMorePost = async () =>
  {
    let newCardDetails = cardData;
    setCardDetails((old) => [ ...old, ...newCardDetails ]);

    // const res = await fetch(
    //   `https://jsonplaceholder.typicode.com/todos?_start=${posts.length}&_limit=10`
    // );
    // const newCardDetails = await res.json();
    // setCardDetails((old) => [...old, ...newCardDetails]);
  };

  return (
    <>
      <InfiniteScroll
        dataLength={ cardDetails.length }
        next={ getMorePost }
        hasMore={ hasMore }
        loader={ <h3> Loading...</h3> }
        endMessage={ <h4>Nothing more to show</h4> }
      >
        {/* main cards */ }
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 mt-20 mb-6">
          { cardDetails?.map((card, index) => (
            <div className="card border border-gray-200 rounded-md" key={ index }>
              <div className="card-top relative">
                <Image src={ "/images/" + card.image } alt={ "card_" + index } className='w-full max-h-[400px] object-cover' width={ 445 } height={ 400 } />
                { card?.sold && (
                  <Image src="/images/sold-out.png" alt="sold-out" className='absolute left-0 bottom-0 w-full h-auto' width={ 445 } height={ 295 } />
                ) }
                { card?.cancelled && (
                  <Image src="/images/cancelled.png" alt="cancelled" className='absolute left-0 bottom-0 w-full h-auto' width={ 445 } height={ 295 } />
                ) }
              </div>
              <div className="card-middle bg-primary text-white flex gap-2 items-center w-full py-1.5 px-6 text-md">
                <Image src="/images/calendar-white.svg" alt="calendar-white" width={ 12 } height={ 12 } />
                <span>{ card.date }</span>
              </div>
              <div className="card-body py-4 px-6">
                <h4 className='text-black font-semibold text-lg mb-2'>{ card.title }</h4>
                <p className='text-gray-700 text-sm leading-6'>{ card.desc }</p>
                <div className="grid grid-cols-2 gap-2 my-3">
                  <div className='tickets flex items-center gap-2'>
                    <Image src="/images/tickets-black.svg" alt="tickets" width={ 14 } height={ 15 } />
                    <span className='text-gray-700 text-sm'>Tickets</span>
                    <span className='text-gray-700 text-sm'>{ card.tickets }</span>
                  </div>
                  <div></div>
                  <div className='tickets flex items-center gap-2'>
                    <Image src="/images/user-black.svg" alt="user" width={ 12 } height={ 15 } />
                    <span className='text-gray-700 text-sm'>Age: { card.age }</span>
                  </div>
                  <div className='tickets flex items-center gap-2'>
                    <Image src="/images/time-black.svg" alt="time" width={ 14 } height={ 15 } />
                    <span className='text-gray-700 text-sm'>{ card.time }</span>
                  </div>
                </div>

                {/* bottom button */ }
                {/* sold button */ }
                { card?.sold && (
                  <button
                    disabled
                    className={ 'text-md px-4 py-2 rounded text-center block w-full mt-8 mb-2 font-semibold bg-red-500 text-white' }
                  >Book Tickets</button>
                ) }
                {/* cancelled button */ }
                { card?.cancelled && (
                  <button
                    disabled
                    className={ 'text-md px-4 py-2 rounded text-center block w-full mt-8 mb-2 font-semibold bg-gray-500 text-primary' }
                  >Book Tickets</button>
                ) }
                {/* private button */ }
                { card?.private && (
                  <button
                    className={ 'text-md px-4 py-2 rounded text-center block w-full mt-8 mb-2 font-semibold bg-gray-900 text-white' }
                  >Book Tickets</button>
                ) }
                {/* private button */ }
                { !card?.sold && !card?.cancelled && !card?.private && (
                  <button
                    className={ 'text-md px-4 py-2 rounded text-center block w-full mt-8 mb-2 font-semibold bg-yellow-300 text-primary' }
                  >Book Tickets</button>
                ) }
              </div>
            </div>
          )) }
        </div>
      </InfiniteScroll>

    </>
  );
};

export default Content;
