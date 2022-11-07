import React, {useState} from 'react'
import './style.css'
import Footer from '../Footer'
import myImage from '../../images/me-playing-2.jpg'
import myImageTwo from '../../images/Bled.jpeg'
import AnimatePage from '../Animate'
import Typewriter from 'typewriter-effect'
import {FaDev} from "react-icons/fa"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function Me() {
  const [about, showMore] = useState(false);
  // update the state
  function toggleMore() {
    if (about === true) {
      showMore(false);
    } else {
      showMore(true);
    }
  }
  return (
    <div>
      <AnimatePage>
      {!about ? (
      <section className='format-section'>
        <div className='dots'>
          <div className='dots-display'>
            <div className='dot red-dot'></div>
            <div className='dot yellow-dot'></div>
            <div className='dot green-dot'></div>
          </div>
          <div className='content-about-me'>
            <img className='my-image' src={myImage} alt='my own img playing guitar'></img>
            <div className='content-context'>
              <h1 className='left-heading'><span className='span'>Hel</span>lo,</h1>
              <h2 className='inside-heading'>I am Jugurta</h2>
              <div className='section-two-about-me'>
                <div className='about-me-content-one'>
                  <p className='about-me-paragraph'>Hi, I'm Jugurta! I'm a young innovative thinker going into the software development field. 
                  I have in-depth experience with JavaScript, HTML, CSS, React, Node.js, Express.js, Handlebars, MongoDB, MySQL, SQL, Git and many 
                  other libraries and frameworks. Being experienced with front-end and back-end web development, I'm confident in my abilities to 
                  optimize functions and provide user friendly, initiative, adaptable, and effective solutions. I'm always open to learning and developing 
                  connections with other software engineers in the area, so feel free to message me.
                  </p>
                </div>
                <a href='#here'><div className='see-more' onClick={toggleMore}>See More</div></a>
              </div>
              <p className='welcome-paragraph'>
              <Typewriter onInit={(typewriter) =>{
                  typewriter.typeString('Welcome to my protfolio.').pauseFor(1000).deleteAll().start()
                  typewriter.typeString('Ready to get into this industry').pauseFor(1000).deleteAll().start()
                  typewriter.typeString('Please take your time to explore what ive been working on').pauseFor(1000).deleteAll().start()
                  typewriter.typeString('I would love to see some feedbacks from you.').start()
                }}/>
              </p>
            </div>
          </div>
          <div className='sign'>
            <div className='social-media'>
              <div>
                Full Ftack Web Developer
              </div>
              <div className='fav'>
                <FaDev></FaDev>
              </div>
            </div>
          </div> 
        </div>
      </section>
      ):(
        <section className='format-section'>
        <div className='dots'>
          <div className='dots-display'>
            <div className='dot red-dot'></div>
            <div className='dot yellow-dot'></div>
            <div className='dot green-dot'></div>
          </div>
          <div className='content-about-me'>
            <img className='my-image' src={myImageTwo} alt='my own img playing guitar'></img>
            <div className='content-context'>
              <p className='welcome-paragraph'>
              </p>
              <div className='section-two-about-me-two'>
                <div className='about-me-content-one'>
                  <p className='about-me-paragraph'>I came from a small hometown that has a wonderful  nature, I love it and i would love to go back to live there again.
                  My family is everywhere lol, France, Canada, Algeria, Switzerland..., i visit my family almost every year.
                  The best thing i do like over my hometown is the weather, 4 seasons and i live in the closest Montagne to the beach, which is great and fun.
                  i took this picture when i went back home 2021, and its showing the beauty of my hometown.</p>
                </div>
              </div> 
              <a href='#here'><div className='see-more' onClick={toggleMore}>Back</div></a>
            </div>
          </div>
        </div>
        </section>      
        )}
      </AnimatePage>
      <Footer></Footer>
    </div>
  )
}

export default Me