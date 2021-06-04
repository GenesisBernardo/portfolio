import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import '../styles/contactStyle.css';
import emailjs from 'emailjs-com';


const Contact = () => {

    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_t9p0hal', 'template_l4g0nti', e.target, 'user_3uyrNbN3j3nuO947uV07M')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      }


    return (
        <div className="contact">
            <div className="container">
                <div className="contact-h1">
                    <h1>Contact</h1>
                    <span className="first-span"></span>
                    <span className="second-span"></span>
                </div>
                <form className="contact-form" data-aos="zoom-in" onSubmit={sendEmail}>
                    <div className="input">
                        <label>Name</label>
                        <input type="text" name="name" />
                    </div>
                    <div className="input">
                        <label>Email</label>
                        <input type="email" name="email" />
                    </div>
                    <div className="input">
                        <label>Message</label>
                        <textarea name="message" />
                    </div>
                    <button type="submit">Send Inquiry</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;