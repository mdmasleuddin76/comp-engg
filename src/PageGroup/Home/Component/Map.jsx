/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import train from '../../../assets/icons8-train.png'
import plane from '../../../assets/icons8-plane.png'
import bus from '../../../assets/icons8-bus.png'
import railway from '../../../assets/icons8-railway.png'

const Map = () => {
  return (
    <div className="">
        <div className='dotted-line'></div>
        <div className='reach-methods'>
            <div className='reach-point flex flex-row'> 
                <img className='reach-icon' src={train} alt='train'/>
                <p className='grow pl-2'>
                <h5>METRO</h5>
                    Nearest metro stations are 'Jamia Millia Islamia' and 'Sukhdev Vihar', on<br/>
                    magenta line, which are at walking distance from the University.
                </p>
            </div>
            <div className='reach-point flex flex-row'> 
                <img className='reach-icon' src={plane} alt='train'/>
                <p className='grow pl-2'>
                <h5>INDRA GANDHI INTERNATIONAL AIRPORT</h5>
                    Nearest metro stations are 'Jamia Millia Islamia' and 'Sukhdev Vihar', on<br/>
                    magenta line, which are at walking distance from the University.
                </p>
            </div>
            <div className='reach-point flex flex-row'> 
                <img className='reach-icon' src={bus} alt='train'/>
                <p className='grow pl-2'>
                <h5>BUS STATION</h5>
                    Nearest metro stations are 'Jamia Millia Islamia' and 'Sukhdev Vihar', on<br/>
                    magenta line, which are at walking distance from the University.
                </p>
            </div>
            <div className='reach-point flex flex-row'> 
                <img className='reach-icon' src={railway} alt='train'/>
                <p className='grow pl-2'>
                <h5>NEW DELHI RAILWAY STATION</h5>
                    Nearest metro stations are 'Jamia Millia Islamia' and 'Sukhdev Vihar', on<br/>
                    magenta line, which are at walking distance from the University.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Map
