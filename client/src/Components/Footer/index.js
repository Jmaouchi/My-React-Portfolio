import React, {useState} from 'react'
import { FaLinkedin } from "react-icons/fa";
import {FaLocationArrow} from "react-icons/fa"
import {FaInstagram} from "react-icons/fa"
import {FaRegEnvelope} from "react-icons/fa"
import './footer.css'

function Footer() {

  return (
    <div>
      <footer className='footer'> 
          <a href='https://www.linkedin.com/in/jugurta-maouchi-840b08227/'>
            <div className='footer-context'>
              <FaRegEnvelope className='here'></FaRegEnvelope>
            </div>
          </a>
          <a href='https://www.linkedin.com/in/jugurta-maouchi-840b08227/'>
            <div className='footer-context'>
              <FaLocationArrow className='here'></FaLocationArrow>
            </div>
          </a>
          <a href='https://www.linkedin.com/in/jugurta-maouchi-840b08227/'>
          <div className='footer-context'>
            < FaInstagram className='here'></FaInstagram>
          </div>
          </a>
          <a href='https://www.linkedin.com/in/jugurta-maouchi-840b08227/'>
          <div className='footer-context'>
            < FaLinkedin className='here'></FaLinkedin>
          </div>
          </a>
      </footer>
    </div>
    
  )
}

export default Footer