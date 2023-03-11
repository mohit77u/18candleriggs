import React from 'react'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import axios from 'axios'
import formatImages, { apiKey } from '@/utils/common';
import Spinner from './Spinner';

function EventsImagesTab() {
    const [loading, setLoading] = useState(true)
    const [AllImages, setAllImages] = useState([])
    const [AllImagesFormated, setAllImagesFormated] = useState([])
    
    // all images
    const getAllImages = () => {
        axios.get('https://api.pexels.com/v1/search?query=events&per_page=10&orientation=landscape&size=small', {
            headers: {
                Authorization: apiKey,
            },
        })
        .then((res)=> {
            setAllImages(res?.data?.photos);
            const formated = formatImages(res?.data?.photos);
            setAllImagesFormated(formated);
            setLoading(false)
        }).catch((err) => {
            console.log(err)
        })
    }

    useEffect(() => {
        setTimeout(() => {
            getAllImages();
        }, 1500)
    }, [])


    return (
        <>
            {!loading && AllImages.length > 0 ? 
                <>
                    <div className="tab-content lg:w-8/12 mx-auto my-5">
                        <div className="grid sm:grid-cols-1 md:grid-cols-2 grid-cols-1 gap-6">

                            {AllImagesFormated?.map((image, index) => (
                                <div key={index}>
                                    {index == 0 && (
                                        <div className="left single-big">
                                            <Image src={image?.src?.original} alt="gallery" className='w-full main-image' width={image?.width} height={image?.height} priority />
                                        </div>
                                    )}

                                    {index == 1 && (
                                        <div className="grid sm:grid-cols-2 grid-cols-1 gap-6">
                                            {image?.map((smallImage, index) => (
                                                <div className="single-small" key={index}>
                                                    <Image src={smallImage?.src?.original} alt="gallery" className='w-full small-image' width={smallImage?.width} height={smallImage?.height} priority />
                                                </div>

                                            ))}
                                        </div>
                                    )}

                                    {index == 2 && (
                                        <div className="grid sm:grid-cols-2 grid-cols-1 gap-6">
                                            {image?.map((smallImage, index) => (
                                                <div className="single-small" key={index}>
                                                    <Image src={smallImage?.src?.original} alt="gallery" className='w-full small-image' width={smallImage?.width} height={smallImage?.height} priority />
                                                </div>

                                            ))}
                                        </div>
                                    )}

                                    {index == 3 && (
                                        <div className="left single-big">
                                            <Image src={image?.src?.original} alt="gallery" className='w-full main-image' width={image?.width} height={image?.height} priority />
                                        </div>
                                    )}
                                </div>
                            ))}
                            
                            {/* <div className="left">
                                <Image src={AllImages[0]?.src?.original} alt="gallery" className='w-full main-image' width={AllImages[0]?.width} height={AllImages[0]?.height} priority />
                                <div className="grid md:grid-cols-2 grid-cols-1 gap-6 mt-8">
                                    <div className="left">
                                        <Image src={AllImages[1]?.src?.original} alt="gallery" className='w-full small-image' width={AllImages[1]?.width} height={AllImages[1]?.height} priority />
                                        <Image src={AllImages[2]?.src?.original} alt="gallery" className='w-full small-image mt-8' width={AllImages[2]?.width} height={AllImages[2]?.height} priority />
                                    </div>
                                    <div className="right">
                                        <Image src={AllImages[3]?.src?.original} alt="gallery" className='w-full small-image' width={AllImages[3]?.width} height={AllImages[3]?.height} priority />
                                        <Image src={AllImages[4]?.src?.original} alt="gallery" className='w-full small-image mt-8' width={AllImages[4]?.width} height={AllImages[4]?.height} priority />
                                    </div>
                                </div>
                            </div>
                            <div className="right">
                                <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
                                    <div className="left">
                                        <Image src={AllImages[5]?.src?.original} alt="gallery" className='w-full small-image' width={AllImages[5]?.width} height={AllImages[5]?.height} priority />
                                        <Image src={AllImages[6]?.src?.original} alt="gallery" className='w-full small-image mt-8' width={AllImages[6]?.width} height={AllImages[6]?.height} priority />
                                    </div>
                                    <div className="right">
                                        <Image src={AllImages[7]?.src?.original} alt="gallery" className='w-full small-image' width={AllImages[7]?.width} height={AllImages[7]?.height} priority />
                                        <Image src={AllImages[8]?.src?.original} alt="gallery" className='w-full small-image mt-8' width={AllImages[8]?.width} height={AllImages[8]?.height} priority object-fit="cover" />
                                    </div>
                                </div>
                                <Image src={AllImages[9]?.src?.original} alt="gallery" className='w-full main-image mt-8' width={AllImages[9]?.width} height={AllImages[9]?.height} priority />
                            </div> */}
                        </div>
                    </div>
                </> : <>
                    <div className="absolute left-0 top-0 w-full h-full flex justify-center items-center min-h-[60vh]">
                        <Spinner />
                    </div>
                </>
            }
        </>
    )
}


export default EventsImagesTab;