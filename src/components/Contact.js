import React, { useState, useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import '../styles/contactStyle.css';
import emailjs from 'emailjs-com';
import { useForm } from 'react-hook-form';

const Contact = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    const { register, handleSubmit, formState: { errors }, reset, trigger} = useForm();

    const [sentName, setSentName] = useState ("");

    const sendEmail = (data, e) => {
        e.preventDefault();
        emailjs.sendForm('service_t9p0hal', 'template_l4g0nti', e.target, 'user_3uyrNbN3j3nuO947uV07M')
            .then((result) => {
                reset();
                setSentName("Inquiry sent! Check your email in a couple of days for a response.");
                console.log(result.text);
                setTimeout(() => {
                    setSentName("");
                }, 4000);
            },  (error) => {
                console.log(error.text);
            });
      };

    
      

    return (
        <div className="contact" id="contact">
            <div className="container">
                <div className="contact-h1">
                    <h1>Contact</h1>
                    <span className="first-span"></span>
                    <span className="second-span"></span>
                </div>
                <form className="contact-form" data-aos="zoom-in" onSubmit={handleSubmit(sendEmail)}>
                    <p className="message-sent" >{sentName}</p>
                    <div className="input">
                        <label>Name</label>
                        <input type="text" 
                            placeholder="Enter your name here"
                            {...register("name", { required: "Name is Required"})}
                            onKeyUp={() => {
                                trigger("name");
                            }}
                        />
                        {errors.name && (<p className="error">{errors.name.message}</p>)}
                    </div>
                    <div className="input">
                        <label>Email</label>
                        <input type="text" 
                            placeholder="Enter your email here"
                            name="email" {...register("email", { required: "Email is Required" , 
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "Invalid email address",
                            }
                            })}
                            onKeyUp={() => {
                                trigger("email");
                            }}
                        />
                        {errors.email && (<p className="error">{errors.email.message}</p>)}
                    </div>
                    <div className="input">
                        <label>Message</label>
                        <textarea name="message" 
                            placeholder="Enter your message here"
                            {...register("message", { required: "Message is Required"})}/*value={values.message} onChange={handleChange} */ 
                                onKeyUp={() => {
                                trigger("message");
                            }}/>
                        {errors.message && (<p className="error">{errors.message.message}</p>)}
                    </div>
                    <button type="submit">Send Inquiry</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;