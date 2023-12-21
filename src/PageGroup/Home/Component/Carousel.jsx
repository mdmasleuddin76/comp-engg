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
        interval={3000}
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
    </>
  )
}

export default JmiCarousel