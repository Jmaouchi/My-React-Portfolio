import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './result.css'

function Result({result, showResult}) {
  
  return (
    <div className='result-model'>
      <div className='result-content'>
        <div className='result-message'>
          <i className="fa-solid fa-circle-check"></i>
          Your message is sent  successfully
        </div>
        <div className='buttons'>
          <Link to={'/'}><p className='resend result-options'>Home</p></Link>
          <p className='home result-options' onClick={() => showResult(false)}>Resend</p>
        </div>
      </div>
    </div>
  )
}

export default Result