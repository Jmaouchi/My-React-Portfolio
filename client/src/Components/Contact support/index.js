import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Result from '../Contact/Result';

function ContactB() {
  const [result, showResult] = useState(false)
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

        emailjs.sendForm('service_aftmqcs', 'template_6ze1f5a', form.current, 'QOoBe1iurTGetrget')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
      showResult(true)
  };
  return (
    <div>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="fullName" />
        <label>Email</label>
        <input type="email" name="email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
    </form>
    <div>
      {result ? <Result /> : null}
    </div>
    </div>
  )
}

export default ContactB