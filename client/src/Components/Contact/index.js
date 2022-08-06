import React, { useRef, useState } from 'react';
import './contact.css'
import Nav from '../../Components/Navbar/Nav'
import Footer from '../Footer/index';
import emailjs from '@emailjs/browser';
import Result from '../Result';
// import useMutation from the apollo client. (this will allow us to use the mutations that we has as a middleware on the server side)
// import { useMutation } from '@apollo/client';
// import { ADD_CONTACT } from '../../utils/mutations';

function ContactPage() {
    const [result, showResult] = useState(false)
    const form = useRef();
    const sendEmail = (e) => {
      e.preventDefault();

      emailjs.sendForm('service_e3kfpse', 'template_ss0xnqf', form.current, '4J3nE1LiRZ_svDbWb')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
        showResult(true)
    };

  return (
    <>
    <Nav />
      {
        <section className='tile is-ancestor  has-text-centered is-flex-wrap-wrap contact-tile contact'>
          <div className='tile is-parent has-text-centered mx-6 my-6 px-4 is-7 parent-contact '>
            <div className='tile is-child box column contact-box border-tile child-contact'>
              <h5 className='title is-3 my-4 mt-6 contact-title'>Contact Me</h5>
              {/*Add contact form*/}
              <form className='field contact-field my-6' ref={form} onSubmit={sendEmail}>
                <div className='fullName'>
                  <label>Full Name</label>
                  <input type="text" name="name" placeholder='Full Name' required/>
                </div>
                <div className='phone'>
                  <label>Phone</label>
                  <input type="text" name="phone" placeholder='Phone Number' required/>
                </div>
                <div className='email'>
                  <label>Email</label>
                  <input type="email" name="email" placeholder='Email' required/>
                </div>

                <div className='message'>
                  <label>Message</label>
                  <textarea name="message" placeholder='says' required/>
                </div>
                <button className='button input-border' id='' >
                  Contact
                </button>
              </form>
            </div>
          </div>
        </section>
        
      }
      <div>
        {result ? <Result /> : null}
      </div>
      <Footer  />
    </>
  );
}

export default ContactPage;
