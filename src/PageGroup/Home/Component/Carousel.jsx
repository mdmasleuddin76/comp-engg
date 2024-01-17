import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Jmi1 from '../assets/Jmi1.png'
import "./slide.css"

const JmiCarousel = () => {

  return (
    <>
      <Carousel className='main-slide'
        showThumbs={false}
        autoPlay={true}
        // transitionTime={3}
        interval={4000}
        infiniteLoop={true}
        showStatus={false}
      >
        <div className="posterImage">
          <img src={Jmi1} />
        </div>
        <div className="posterImage">
          <img src="https://wallsdesk.com/wp-content/uploads/2016/09/Space-Wallpapers-HQ.jpg" />
        </div>
      </Carousel>
      <div
        className="mt-3 group relative col-span-1 flex justify-end overflow-hidden rounded-md text-black h-12 "
      >
        <a href='/gallery' ><h3 className="font-semibold" style={{ fontSize: "20px", marginRight: "30px" }}>
          View More
          <div className="right-20 bottom-2 h-[5px] w-[30px] rounded bg-green-700 transition-all duration-300 group-hover:w-[10%] sm:left-4" />

        </h3></a>
      </div>
    </>
  )
}

export default JmiCarousel