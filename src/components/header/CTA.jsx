import React from 'react'
import Evento from '../../assets/photo_2024-02-25_14-08-34.jpg'
const CTA = () => {
  return (
    <div className='cta'>
        <a href="#contact" className='btn btn-primary'>Let's talk</a>
        <a className='btn' href={Evento} download>Next Event</a>
    </div>
  )
}

export default CTA