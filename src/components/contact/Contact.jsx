import React from 'react'
import './contact.css'
import { MdMarkEmailRead } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";


const Contact = () => {
  return (
    <section id='contact'>
      <h5> Get in touch</h5>
      <h2>contact me</h2>

   <div className="container contact__container">
    <div className='contact__options'>
      <article className='contact__option'>
      <MdMarkEmailRead className='contact__option-icon'/>
        <h4>Email</h4>
        <h5>alice.gerelli@gmail.com</h5>
        <a href="mailto:alice.gerelli@gmail.com" target='_blank'> send a mail</a>
      </article>
      <article className='contact__option'>
      <FaWhatsapp className='contact__option-icon'/>
        <h4>Whatsapp</h4>
        <h5>123456789</h5>
        <a href="https://api.whatsapp.com/send?phone=1231321321" target='_blank'> send a message</a>
      </article>
      <article className='contact__option'>
      <FaInstagram className='contact__option-icon'/>
        <h4>Instagram</h4>
        <h5>alice.gerelli.yoga</h5>
        <a href="https://instagram.com" target='_blank'> DM me</a>
      </article>
    </div>
   </div>
    </section>
  )
}

export default Contact