import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
const SendEmail = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_lfwwiwi', 'template_8dhvnib', form.current, 'YgRulTmORe8ZYcETe')
      .then((result) => {
          console.log(result.text);
          console.log('send message')
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className='w-50 mx-auto py-12'>
      <div className='py-5'>
        <h2 className='text-secondary font-bold text-2xl'>Send Message</h2>
      </div>
      <div>


     
      <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder="enter your name" class="input input-bordered input-primary w-full max-w-xs " required />
          <br />
          <input type="email" name='email' placeholder="enter your email" class="input input-bordered input-primary w-full max-w-xs mt-5" required />
          <br />
          <textarea name='message' class="textarea textarea-primary mt-5 w-full max-w-xs" placeholder="enter your massage" required></textarea>
          <br />
          <input type="button" value="Send" className='btn btn-outline w-full max-w-xs mt-4 btn-primary'/>
        </form>
      </div>

    </div>
  );
};

export default SendEmail;