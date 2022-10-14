import React, {useState} from 'react'
import { FaLinkedin, FaWindowClose , FaLocationArrow, FaInstagram, FaRegEnvelope} from "react-icons/fa";
import './footer.css'

function Footer() {

  const [email, setEmail] = useState(false);
  // update the state
  function closeState() {
    if (email === true) {
      setEmail(false);
    } else {
      setEmail(true);
    }
  }
  return (
    <div>
      <footer className='footer'> 
          <div className='footer-context' onClick={closeState}>
            <FaRegEnvelope className='mobile-res'></FaRegEnvelope>
          </div>
          <a href='https://www.linkedin.com/in/jugurta-maouchi-840b08227/' target={'_blank'} rel='noreferrer'>
            <div className='footer-context'>
              <FaLocationArrow className='mobile-res'></FaLocationArrow>
            </div>
          </a>
          <a href='https://www.instagram.com'target={'_blank'} rel='noreferrer'>
            <div className='footer-context'>
              < FaInstagram className='mobile-res'></FaInstagram>
            </div>
          </a>
          <a href='https://www.linkedin.com/in/jugurta-maouchi-840b08227/'target={'_blank'} rel='noreferrer'>
          <div className='footer-context'>
            < FaLinkedin className='mobile-res'></FaLinkedin>
          </div>
          </a>
          {email ? (
          <div className='email' onClick={closeState}>
            <button className='email-close'>
              <FaWindowClose className='close'></FaWindowClose>
            </button>
            <div>
              Email Me At: djigo.maouchi@yahoo.com
            </div> 
          </div>
          ):(null)}
      </footer>
    </div>
    
  )
}

export default Footer