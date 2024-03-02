import React from 'react'
import './portfolio.css'
import ATT from '../../assets/photo_2024-02-25_14-13-16.jpg'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>certificazione</h5>
      <h2>inserire attestato</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>

          <img src={ATT} alt="" />

          </div>


        </article>
      </div>
    </section>
  )
}

export default Portfolio