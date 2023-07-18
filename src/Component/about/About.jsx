import React from 'react'
import './About.css'
import Me from '../../assets/MyImage.jpg'
import {FaAward} from 'react-icons/fa';
import {VscFolderLibrary} from 'react-icons/vsc';

const About = () => {
  return (
    <section className='about' id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className='container about__container'>
        <div className='about__me'>
        <div className='about__me-image'>
      <img src={Me} alt='me'/>
        </div>
        </div>
        <div className='about__content'>
       <div className='about__cards'>
        <article className='about__card'>
          <FaAward className='about__icon'/>
          <h5>Experience</h5>
          <small>6 month as a Trainee</small>
        </article>
        <article className='about__card'>
          <VscFolderLibrary className='about__icon'/>
          <h5>Projects</h5>
          <small>4+ Completed</small>
        </article>
       
       </div>
       <p>
       Hi there! I'm Deepak kumar, a dedicated and creative front-end developer with a strong
        passion for crafting engaging and user-friendly web experiences. With 6 month of experience
        as a Trainee in Function up, I have a deep understanding of front-end technologies and
         a proven track record of delivering high-quality projects.

       My expertise lies in translating design mockups into pixel-perfect, responsive websites 
       using HTML, CSS, and JavaScript. I am well-versed in modern front-end librarry like React js
      and framework like Bootstrap and Material ui and for state managment library i am using Redux,Recoil, 
      useContext and ContextApi, and I stay up-to-date with the latest trends and best practices in the 
      rapidly evolving web development landscape.

      I am also working experienced in optimizing website performance, improving accessibility, and
      ensuring cross-browser compatibility to deliver seamless user experiences across different devices.
       </p>
       <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
      </section>
  )
}

export default About