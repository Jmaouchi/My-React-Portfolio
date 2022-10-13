import React, {useState} from 'react'
import { FaLinkedin } from "react-icons/fa";
import {FaLocationArrow} from "react-icons/fa"
import {FaInstagram} from "react-icons/fa"
import './footer.css'

function Footer() {

  return (
    <div>
      <footer className='footer'> 
        <div className='contact-side'>
          <div className='right-side'>
            <span className='contact-email'>Email :</span> 
            <p>
            djigo.maouchi@yahoo.com
            </p>
          </div>
          <div className='left-side'>
            <span className='contact-based'>Based In : </span>
            <FaLocationArrow></FaLocationArrow>
            <p>
              San Antonio 
            </p>
          </div>
          <div>
            Linkdin 
            <p>< FaLinkedin ></FaLinkedin></p>
          </div>
          <div>
            Instagram
            <p>< FaInstagram></FaInstagram></p>
          </div>
          <div>
            <p>< FaLinkedin ></FaLinkedin></p>
          </div>
        </div>
      </footer>
      {/* <div>
            <p className='footer-author'>
              &copy; 2022 | Built with <span></span> 💙 by Jugurta Maouchi
            </p> 
          </div> */}
    </div>
    
  )
}

export default Footer