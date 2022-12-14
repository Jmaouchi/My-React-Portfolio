import React from 'react'
import Nav from '../../Components/Navbar2'
import './work.css'
import Typewriter from 'typewriter-effect'
import Carousel from '../../Components/Carousel';
import { myWorkdata } from './workData';
import Footer from '../../Components/Footer'
import { MdGetApp } from 'react-icons/md';

function Work() {

  return (
    <div>
      <Nav />
      <div className='wrapper'>
        <section className='hero-image'>
          <div className='hero-section'>
            <div className='djigo-photographer'>
            </div>
          </div>
        </section>
        <div className='hero-content-two'>
          <div className='line'></div>
        </div>

        <div className='work-area'>
          <div className='work-area-content'>
            <h2 className='section-heading'><span className='span'>My</span>Work</h2>
            <div className='typewrite'>
              <Typewriter  onInit={(typewriter) =>{
                typewriter.typeString('Please take your time and checkout my hard work').pauseFor(1000).deleteAll().start()
                typewriter.typeString('I apreciate it').pauseFor(1000).start()
              }}/>
            </div>
          </div>
        </div>

        {/* wrapper start */}
        <div className="portfolio-items-wrapper ">
          {/* one */}
          {myWorkdata.map((item) => (
          <div className='div-col'>
            <div className="portfolio-item-wrapper">
              <div className="portfolio-img-background item"><img className='portfolio-img-background item' src={item.image} alt="" />
              </div>
              <div className="img-text-wrapper">
                <div className="logo-wrapper">
                  {item.techs.map((tech) => (
                    <i className={tech}></i>
                  ))}
                </div>
                <div className="subtitle">
                  <h2>{item.title}</h2>
                  <p>{item.text}</p>
                  <div className='src'>
                    <a href={item.path} className="path-live">Live</a>
                    <a href={item.github} className="path-live">GitHub</a>
                  </div>  
                </div>
              </div>
            </div> 
          </div>
          ))} 
        </div>
        <div className='grid-bottom-line'>
          <div className='line'></div>
        </div>
        <div className='section-resume'>     
          <h2 className='section-heading'><span className='span'>My</span> Skills</h2>
        </div>
        <div className='carousel-section'>
        <Carousel /> 
        </div>

        <div className='grid-bottom-line'>
          <div className='line'></div>
        </div>
        <div className='section-resume'>     
          <h2 className='section-heading'><span className='span'>My</span> Resume</h2>
            <div className="hero is-black is-medium-with-navbar">
              <div className="hero-body">
                <div className="container has-text-centered here">
                  <a
                    href="https://docs.google.com/document/d/1DzoqJRLrVJlvOe5CdlPxFmNoCjGGEOtN/edit?usp=sharing&ouid=114856392661887636707&rtpof=true&sd=true"
                    target="_blank"
                    rel="noreferrer"
                    className="button resume-download"
                  >
                  <span className="icon"><MdGetApp /></span>
                  <span>Download CV</span>
                  </a>
                </div>
              </div>  
          </div>  
        </div>
      </div> 

      <Footer />   
    </div>
  )
}

export default Work
