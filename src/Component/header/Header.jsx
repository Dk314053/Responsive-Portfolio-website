import React from 'react'
import './Header.css'
import CTA from './CTA'
import Me from '../../assets/MyImage.jpg'
import HeaderSocials from './HeaderSocials'
const Header = () => {
  return (
    <header>
     <div className='.container.header__container'>
      <div className='main'>
      <h5>Hello My Name is </h5>
      <h1>Deepak Kumar</h1>
      <h5 className='text-light'>Frontend Devloper </h5>
      </div>
        <CTA/>
        <HeaderSocials/>
        <div >
          <img className='me' src={Me} alt='me'/>
        </div>
        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div> 
    </header>
  )
}

export default Header