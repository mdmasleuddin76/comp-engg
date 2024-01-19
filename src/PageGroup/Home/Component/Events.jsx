// eslint-disable-next-line no-unused-vars
import React from 'react'
import { events } from '../../../../data/home.js'
import clock from '../../../assets/icons8-clock.png'
import location from '../../../assets/icons8-location.png'

const Events = () => {

    const new_events = events['2018'].slice(0,3); // latest year - can use max of Object.keys(data);

  return (
    
    <div className='m-3 relative flex flex-col flex-wrap max-w-screen-sm'>
      {/* <h1 className='events-heading font-bold'>Events</h1> */}
      <div
                className="group relative flex rounded-md text-green-800 h-12 "
                style={{marginTop: "30px"}}
            >
                <h3 className="font-semibold" style={{fontSize: "20px", marginLeft: "15px"}}>Events</h3>
                <div className="absolute left-3 bottom-2 h-[5px] w-[30px] rounded bg-green-700 transition-all duration-300 group-hover:w-[10%] sm:left-4" />
            </div>


        {new_events.map((event, eventId) => (
            <div className="group relative mt-1 mb-1 col-span-1 flex items-center justify-center overflow-hidden rounded-md text-green-800 shadow" key={eventId}>
            <div className="flex w-full flex-col gap-y-3 bg-green-light px-4 pl-6 py-4 sm:pl-8 text-sm sm:px-8 md:px-12">
                <h3 className="font-semibold">{event.tagline}</h3>
                <p className="text-black">{event.desc.substring(0,50)}...<a className='text-green-yellow underline' href='/event'>Read More</a></p>
            <div className='m-1 mt-3 flex flex-row flex-wrap gap-5'>
                     <p className='flex flex-nowrap'><img className='event-icon' src={clock} alt='clock8' /><span className='-ml-2'>{event.date}</span></p>
                     <p className='flex flex-nowrap'><img className='event-icon' src={location} alt='location8' /><span className='-ml-2'>{event.venue}</span></p>
            </div>
            </div>
            <div className="absolute left-2 h-[80%] w-[6px] rounded bg-green-700 transition-all duration-300 group-hover:h-[60%] sm:left-4" />
        </div>
        )
        )}
    </div>
  )
}

export default Events

// <div key={eventId} className="event-box relative m-3 p-8 flex gap-4">
            // <div className='vertical-event-line'></div>
            // <div>
            //     <h3 className='mb-2 event-heading font-bold'>{event.tagline}</h3>
            //     <p>{event.desc.substring(0,50)}...<a className='text-green-yellow underline' href='/event'>Read More</a></p>
            //     <div className='m-1 mt-3 flex flex-row flex-wrap gap-8'>
            //         <p className='flex flex-nowrap'><img className='event-icon' src={clock} alt='clock8' />{event.date}</p>
            //         <p className='flex flex-nowrap'><img className='event-icon' src={location} alt='location8' />{event.venue}</p>
            //     </div>
            // </div>
            // </div>