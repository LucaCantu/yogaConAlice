import React from 'react'
import './experience.css'
import { PiFlowerLotusBold } from "react-icons/pi";

const Experience = () => {
  return (
    <section id='experience'>
      <h5>My skills</h5>
      <h2> My experience</h2>
      <div className="container experience__container">
        <div className='experience__frontend'>
          <h3>titolo</h3>
          <div className="experience__content">
            <article className="experience__details">
                <PiFlowerLotusBold className='experience__details-icon'/>
                <div>
                <h4>titolo</h4>
                <small className='text-light'>descrizione</small>
                </div>
            </article>
            <article className="experience__details">
                <PiFlowerLotusBold className='experience__details-icon'/>
                <div>
                <h4>titolo</h4>
                <small className='text-light'>descrizione</small>
                </div>
            </article>
            <article className="experience__details">
                <PiFlowerLotusBold className='experience__details-icon'/>
                <div>
                <h4>titolo</h4>
                <small className='text-light'>descrizione</small>
                </div>
            </article>            <article className="experience__details">
                <PiFlowerLotusBold className='experience__details-icon'/>
                <div>
                <h4>titolo</h4>
                <small className='text-light'>descrizione</small>
                </div>
            </article>            <article className="experience__details">
                <PiFlowerLotusBold className='experience__details-icon'/>
                <div>
                <h4>titolo</h4>
                <small className='text-light'>descrizione</small>
                </div>
            </article>
          </div>
        </div>

        <div className='experience__frontend'>
        <h3>titolo</h3>
          <div className="experience__content">
          <article className="experience__details">
                <PiFlowerLotusBold className='experience__details-icon'/>
                <div>
                <h4>titolo</h4>
                <small className='text-light'>descrizione</small>
                </div>
            </article>
            <article className="experience__details">
                <PiFlowerLotusBold className='experience__details-icon'/>
                <div>
                <h4>titolo</h4>
                <small className='text-light'>descrizione</small>
                </div>
            </article>
            <article className="experience__details">
                <PiFlowerLotusBold className='experience__details-icon'/>
                <div>
                <h4>titolo</h4>
                <small className='text-light'>descrizione</small>
                </div>
            </article>            <article className="experience__details">
                <PiFlowerLotusBold className='experience__details-icon'/>
                <div>
                <h4>titolo</h4>
                <small className='text-light'>descrizione</small>
                </div>
            </article>            <article className="experience__details">
                <PiFlowerLotusBold className='experience__details-icon'/>
                <div>
                <h4>titolo</h4>
                <small className='text-light'>descrizione</small>
                </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience