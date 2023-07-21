import React from 'react'
import './Project.css'
import Gym from '../../assets/gym.png'
import Twitter from '../../assets/twitter_clone.png'
import doc from '../../assets/Google_doc.png'
import kanban from '../../assets/kanban_board.png'
const Project = () => {
  return (
    <section id='projects'>
      <h5>What Projects I have done</h5>
      <h2>My Projects</h2>

    <div className=" container portfolio_container">
      <article className='portfolio_item'>
      <div className='portfolio_item-image'>
      <img src={Gym} alt='gym'/>
      </div>
      <h3>Gym Website</h3>
      <div className='portfolio_item-cta'>
      <a className='btn' href='https://github.com/Dk314053/project-1-Gym-Website' target='blank'>
        Github link
      </a>
      <a className='btn btn-primary' href='https://project-1-gym.onrender.com' target='blank'>
       Deploy Link / Live Demo
      </a>
      </div>
      </article>
      <article className='portfolio_item'>
      <div className='portfolio_item-image'>
      <img src={Twitter} alt='gym'/>
      </div>
      <h3>Twitter Clone</h3>
      <div className='portfolio_item-cta'>
      <a className='btn' href='https://github.com/Dk314053/Project-2/tree/master' target='blank'>
        Github link
      </a>
      <a className='btn btn-primary' href='https://twclgp.onrender.com/' target='blank'>
       Deploy Link / Live Demo
      </a>
      </div>
      </article>
      <article className='portfolio_item'>
      <div className='portfolio_item-image'>
      <img src={doc} alt='gym'/>
      </div>
      <h3>Google doc</h3>
      <div className='portfolio_item-cta'>
      <a className='btn' href='https://github.com/Dk314053/Project-3-Clone_Google_Doc' target='blank'>
        Github link
      </a>
      <a className='btn btn-primary' href='https://google-doc-project-3.onrender.com/' target='blank'>
       Deploy Link / Live Demo
      </a>
      </div>
      </article>
      <article className='portfolio_item'>
      <div className='portfolio_item-image'>
      <img src={kanban} alt='gym'/>
      </div>
      <h3>Kanban Board</h3>
      <div className='portfolio_item-cta'>
      <a className='btn' href='https://github.com/Dk314053/project_4-kanban-board' target='blank'>
        Github link
      </a>
      <a className='btn btn-primary' href='https://kan-ban-new.onrender.com' target='blank'>
       Deploy Link / Live Demo
      </a>
      </div>
      </article>
    </div>
    </section>
  )
}

export default Project