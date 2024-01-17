// eslint-disable-next-line no-unused-vars
import React from 'react'
import { data } from '../../../../data/events.js'
import clock from '../../../assets/icons8-clock.png'
import location from '../../../assets/icons8-location.png'

const Events = () => {

    const events = data['2017'].slice(0,3); // latest year - can use max of Object.keys(data);

  return (
    
    <div className='m-3 relative flex flex-col flex-wrap max-w-screen-sm'>
      <h1 className='events-heading font-bold'>Events</h1>
        {events.map((event, eventId) => (
            <div key={eventId} className="event-box relative m-3 p-8 flex gap-4">
            <div className='vertical-event-line'></div>
            <div>
                <h3 className='mb-2 event-heading font-bold'>{event.tagline}</h3>
                <p>{event.desc.substring(0,50)}...<a className='text-green-yellow underline' href='/event'>Read More</a></p>
                <div className='m-1 mt-3 flex flex-row flex-wrap gap-8'>
                    <p className='flex flex-nowrap'><img className='event-icon' src={clock} alt='clock8' />{event.date}</p>
                    <p className='flex flex-nowrap'><img className='event-icon' src={location} alt='location8' />{event.venue}</p>
                </div>
            </div>
            </div>
        )
        )}
    </div>
  )
}

export default Events
