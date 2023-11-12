// eslint-disable-next-line no-unused-vars
import React from 'react'
import clock from '../../../assets/icons8-clock.png'
import location from '../../../assets/icons8-location.png'

const Events = () => {

    const events = [
        {
            id : 1,
            heading : "Republic Day celebration at FET 2023",
            para : "For the celebration of the Republic Day all the heads of departments and the Dean came together. The 74th Republic Day celebration was held at the fet auditorium with gaiety, enthusiasm and full patriotic fervour.",
            date : "January 25, 2023",
            place : "Jamia Millia Islamia", 
        },
        {
            id : 2,
            heading : "Republic Day celebration at FET 2023",
            para : "For the celebration of the Republic Day all the heads of departments and the Dean came together. The 74th Republic Day celebration was held at the fet auditorium with gaiety, enthusiasm and full patriotic fervour.",
            date : "January 25, 2023",
            place : "Jamia Millia Islamia", 
        },
        {
            id : 3,
            heading : "Republic Day celebration at FET 2023",
            para : "For the celebration of the Republic Day all the heads of departments and the Dean came together. The 74th Republic Day celebration was held at the fet auditorium with gaiety, enthusiasm and full patriotic fervour.",
            date : "January 25, 2023",
            place : "Jamia Millia Islamia", 
        },
    ]

  return (
    <div className='m-3 flex flex-wrap max-w-screen-sm'>
      <h1 className='events-heading font-bold'>Events</h1>
        {events.map((event) => (
            <div key={event.id} className="event-box relative m-3 p-8 flex gap-4">
            <div className='vertical-event-line'></div>
            <div>
                <h3 className='mb-2 event-heading font-bold'>{event.heading}</h3>
                <p>{event.para}</p>
                <div className='m-1 mt-3 flex flex-row flex-wrap gap-8'>
                    <p className='flex flex-nowrap'><img className='event-icon' src={clock} alt='clock8' />{event.date}</p>
                    <p className='flex flex-nowrap'><img className='event-icon' src={location} alt='location8' />{event.place}</p>
                </div>
            </div>
            </div>
        )
        )}
    </div>
  )
}

export default Events
