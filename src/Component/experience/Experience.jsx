import React from 'react'
import './Experience.css'
import {BiBadgeCheck} from 'react-icons/bi';
const Experience = () => {
  const detailed=[
    {
      skill:"HTML",
      position:"Experienced"
    },
    {
      skill:"CSS",
      position:"Experienced"
    },
    {
      skill:"Javascript",
      position:"Experienced"
    },
    {
      skill:"React js",
      position:"Experienced"
    },
    {
      skill:"Bootstrap",
      position:"Experienced"
    },
    {
      skill:"Material Ui",
      position:"Experienced"
    },
    {
      skill:"Redux",
      position:"Intermediate"
    },
    {
      skill:"Recoil",
      position:"Experienced"
    },
    {
      skill:"Axios",
      position:"Experienced"
    },
    {
      skill:"Firebase",
      position:"Intermediate"
    },
    {
      skill:"DSA",
      position:"Intermediate"
    },
  ]
  return (
    <section className='experience' id='experience'>
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>
      <div className='container experience__container'>
      <div className='experience__frontend'>
        <h3>Frontend Devlopment</h3>
        <div className="experience__content">
          { detailed.map((ele,index)=>{
              return (
                <article key={index} className='experience__details'>
                <BiBadgeCheck className='icons'/>
                <div>
                <h4 >{ele.skill}</h4>
                <small className='text-light'>{ele.position}</small>
                </div>
                </article>
              )
              })}  
        </div>
      </div>
      </div>
    </section>
  )
}

export default Experience