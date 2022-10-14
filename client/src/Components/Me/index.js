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
                  <p className='about-me-paragraph'>I am a Fullstack developer! I started coding since i moved to the USA 2019. Started with 
                  some basic HTML and CSS, then moved to JavaScript. I really enjoy my time when i code, and i would love 
                  to be part of this industry soon, i can consider myself a fast learner and hungry to learn new 
                  technologies. I do have a biology bachelors degree. i also can be a translator since i speak 5 languages, 
                  (English, French, Arabic, Berber and a little Spanish). My hobbies are soccer and boxing
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