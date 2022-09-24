import React, { useRef, useState } from 'react';
import './contact.css'
import Nav from '../../Components/Navbar/Nav'
import Footer from '../Footer/index';
import emailjs from '@emailjs/browser';
import Result from './Result';
// import useMutation from the apollo client. (this will allow us to use the mutations that we has as a middleware on the server side)
// import { useMutation } from '@apollo/client';
// import { ADD_CONTACT } from '../../utils/mutations';

function ContactPage() {
    const [result, showResult] = useState(false)
    const form = useRef();
    const sendEmail = (e) => {
      e.preventDefault();

      emailjs.sendForm('service_j84of8n', 'template_6ze1f5a', form.current, '95R44YpVYI3jOrQ2D')
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
        <div className='main-contact-page'>
          <section className='tile is-ancestor  has-text-centered is-flex-wrap-wrap contact-tile contact'>
          <div className='tile is-parent has-text-centered mx-6 my-6 px-4 is-7 parent-contact '>
            <div className='tile is-child box column contact-box border-tile child-contact'>
              <h5 className='title my-4 mt-6 contact-title'>Contact Me</h5>
              {/*Add contact form*/}
              <form className='field contact-field my-6' ref={form} onSubmit={sendEmail}>
                <h2 className='my-4 contact-sub contact-infos-paragraph'>Want to setup some time to talk?</h2>
                <div className='level  level-field '>
                  <div className='level-item is-flex-wrap-wrap mt-2'>
                    <div className='level-item mx-1'>
                      <input
                        className='input level-item level-input input-border '
                        placeholder='Full Name'
                        id='first'
                        name='name'
                        required
                      ></input>
                    </div>
                  </div>
                </div>

                <div className='level level-field '>
                  <div className='level-item is-flex-wrap-wrap'>
                    <div className='level-item mx-1 '>
                      <input
                        className='input level-item level-input input-border'
                        placeholder='Email'
                        id='email'
                        name='email'
                        required
                      ></input>
                    </div>
                    <div className='level-item is-flex-wrap-wrap'>
                      <input
                        className='input level-item  level-input input-border'
                        placeholder='Phone Number'
                        id='phone'
                        name='phone'
                        required
                      ></input>
                    </div>
                  </div>
                </div>
                <div className='field my-4  px-6 here'>
                  <div className='control'>
                    <textarea
                      className='textarea is-small level-field input-border'
                      id='text'
                      placeholder="says"
                      name='message'
                      required
                    ></textarea>
                  </div>
                </div>
                <button className='button input-border' id=''>
                  Contact
                </button>
              </form>
            </div>
          </div>
        </section>       
      </div>
      }
      <div>
        {result ? <Result result={result} showResult={showResult}/> : null}
      </div>
      <Footer  />
    </>
  );
}

export default ContactPage;
