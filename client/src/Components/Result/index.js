import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './result.css'

function Result() {
  
  function setResultState(){
    window.location.reload()
  }

  return (
    <div className='result-model'>
      <div className='result-content'>
        <div className='result-message'>
          <i class="fa-solid fa-circle-check"></i>
          Your message is sent  successfully
        </div>
        <div className='buttons'>
          <Link to={'/'}><p className='resend result-options'>Home</p></Link>
          <p className='home result-options' onClick={setResultState}>Resend</p>
        </div>
      </div>
    </div>
  )
}

export default Result