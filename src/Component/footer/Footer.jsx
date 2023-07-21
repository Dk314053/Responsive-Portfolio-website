import React from 'react'
import './Footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FaLinkedinIn} from 'react-icons/fa'
import {BsTwitter} from 'react-icons/bs'
const Footer = () => {
  return (
<footer>
  
  <ul className='permalinks'>
<li><a href='#'>Home</a></li>
<li><a href='#about'>About</a></li>
<li><a href='#experience'>Experience</a></li>
<li><a href='#projects'>Projects</a></li>
<li><a href='#contact'>Contact</a></li>

  </ul>

  <div className='footer__socials'>
    <a href='https://facebook.com' target='_blank'><FaFacebookF className='footer__logo' /></a>
    <a href='https://linkedin.com' target='_blank'><FaLinkedinIn className='footer__logo'/></a>
    <a href='https://twitter.com' target='_blank'><BsTwitter className='footer__logo'/></a>
  </div>
</footer>
  )
}

export default Footer