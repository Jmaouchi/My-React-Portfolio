import React from 'react';
import './contact.css'
import Nav from '../../Components/Navbar/Nav'
import Footer from '../Footer/index';
function ContactPage() {
  return (
    <>
    <Nav />
      {
        <section className='tile is-ancestor  has-text-centered is-flex-wrap-wrap contact-tile contact'>
          <div className='tile is-parent has-text-centered mx-6 my-6 px-4 is-7 parent-contact '>
            <div className='tile is-child box column contact-box border-tile child-contact'>
              <h5 className='title is-3 my-4 mt-6 contact-title'>Contact Me</h5>
              {/*Add contact form*/}
              <form className='field contact-field my-6'>
                <h2 className='is-4 my-6 contact-sub'>Want to setup some time to talk?</h2>
                <div className='level  level-field '>
                  <div className='level-item is-flex-wrap-wrap mt-2'>
                    <div className='level-item mx-1'>
                      <input
                        className='input level-item level-input input-border '
                        placeholder='First Name'
                        id='first'
                      ></input>
                    </div>
                    <div className='level-item  is-flex-wrap-wrap'>
                      <input
                        className='input level-item level-input input-border'
                        placeholder='Last Name'
                        id='last'
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
                      ></input>
                    </div>
                    <div className='level-item is-flex-wrap-wrap'>
                      <input
                        className='input level-item  level-input input-border'
                        placeholder='Phone (optional)'
                        id='phone'
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
      }
      <Footer  />
    </>
  );
}

export default ContactPage;
