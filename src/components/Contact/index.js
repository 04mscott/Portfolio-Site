import { useRef } from 'react'
import './index.scss'
import emailjs from '@emailjs/browser'

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
        .sendForm('service_d95z8zo', 'template_vst6h6c', form.current, {
            publicKey: 'ptARwoRkNO90avIYL',
        })
        .then(
            () => {
            alert('Email sent successfully');
            window.location.reload(false)
            },
            (error) => {
            alert('Email failed to send');
            },
        );
    };

    

    return (
        <div className='contact-container' >
            <h1>Contact Me</h1>
            <div className='contact-form' >
                <form ref={form} onSubmit={sendEmail} >
                    <div className='info-container'>
                        <input type='text' name='name' placeholder='Name' required />
                        <input type='email' name='email' placeholder='Email' required />
                    </div>
                    <div className='text-container'>
                        <input type='text' className='subject' name='subject' placeholder='Subject' required />
                        <textarea name='message' placeholder='Message' required ></textarea>
                        <input type='submit' className='flat-button' value='Send' />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact