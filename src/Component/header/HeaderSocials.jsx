import React from 'react'
import { BiLogoLinkedinSquare} from 'react-icons/bi';
import { BiLogoGithub} from 'react-icons/bi';

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/deepak-kumar-7134ba145/' target='blank'><BiLogoLinkedinSquare/></a>
        <a href='https://github.com/Dk314053' target='blank'><BiLogoGithub/></a>
        </div>
  )
}

export default HeaderSocials