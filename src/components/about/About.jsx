import React from 'react'
import './about.css'
import ME from '../../assets/me.jpg'
import { FaAward } from "react-icons/fa";


const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, consequatur.</small>
            </article>
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>titolo</h5>
              <small>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi, nostrum?</small>
            </article>
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>titolo</h5>
              <small>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem, aliquam!</small>
            </article>
            </div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio deleniti numquam dolores obcaecati autem velit labore mollitia quae adipisci. Pariatur alias possimus illo aliquid omnis architecto nisi, maxime corrupti rerum.
            </p>
            <a href="#contact" className='btn btn-primary'>let's talk</a>

        </div>
      </div>
    </section>
  )
}

export default About