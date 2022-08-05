import React,{useState} from 'react';
import './contact.css'
import Nav from '../../Components/Navbar/Nav'
import Footer from '../Footer/index';
// import useMutation from the apollo client. (this will allow us to use the mutations that we has as a middleware on the server side)
import { useMutation } from '@apollo/client';
import { ADD_CONTACT } from '../../utils/mutations';

function ContactPage() {
  const [contacts, setContacts] = useState({firstName:'', lastName:'', email:'', text:''});
  // get the addUser mutation from the useMutation apollo/client
  const [contact] = useMutation(ADD_CONTACT);
  // Update the state once the user enter new values
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setContacts({ ...contacts, [name]: value });
  };
  
  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
  
    // use try/catch instead of promises to handle errors
    try {
      // execute addUser mutation and pass in variable data from form
      const { data } = await contact({
        variables: { ...contacts },
      });

      console.log('data is:', data);
  
      // path the user to the homepage
      window.location.assign('/');
    } catch (e) {
      console.error(e);
    }
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
              <form className='field contact-field my-6' onSubmit={handleFormSubmit}>
                <h2 className='is-4 my-6 contact-sub'>Want to setup some time to talk?</h2>
                <div className='level  level-field '>
                  <div className='level-item is-flex-wrap-wrap mt-2'>
                    <div className='level-item mx-1'>
                      <input
                        className='input level-item level-input input-border '
                        placeholder='First Name'
                        id='first'
                        onChange={handleInputChange}
                      ></input>
                    </div>
                    <div className='level-item  is-flex-wrap-wrap'>
                      <input
                        className='input level-item level-input input-border'
                        placeholder='Last Name'
                        id='last'
                        onChange={handleInputChange}
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
                        onChange={handleInputChange}
                      ></input>
                    </div>
                    <div className='level-item is-flex-wrap-wrap'>
                      <input
                        className='input level-item  level-input input-border'
                        placeholder='Phone (optional)'
                        id='phone'
                        onChange={handleInputChange}
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
                      onChange={handleInputChange}
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
