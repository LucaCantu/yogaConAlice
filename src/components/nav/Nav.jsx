import React from 'react'
import'./nav.css'
import { GrYoga } from "react-icons/gr";
import { PiFlowerLotusBold } from "react-icons/pi";
import { IoLogoInstagram } from "react-icons/io5";
import { GrUserFemale } from "react-icons/gr";
import { IoLogoWhatsapp } from "react-icons/io";
import { useState } from 'react';


const Nav = () => {
  const[activeNav, setActiveNav]= useState('#')
  return (
    <nav>
      <a href="#" onClick={()=>setActiveNav('#')} className={activeNav==='#' ? 'active' : ''}><PiFlowerLotusBold /></a>
      <a href="#about"onClick={()=>setActiveNav('#about')} className={activeNav==='#about' ? 'active' : ''}><GrUserFemale /></a>
      <a href="#contact"onClick={()=>setActiveNav('#contact')} className={activeNav==='contact' ? 'active' : ''}><IoLogoWhatsapp /></a>
      <a href="#experience"onClick={()=>setActiveNav('#experience')} className={activeNav==='#experience' ? 'active' : ''}><GrYoga /></a>
      <a href="https://instagram.com" target='_blank'><IoLogoInstagram /></a>
    </nav>
  )
}

export default Nav