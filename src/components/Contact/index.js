import { useRef } from 'react'
import './index.scss'
import emailjs from '@emailjs/browser'

const Contact = () => {
    const refForm = useRef()

    const sendEmail = (e) => {
        e.preventDefault()
        
        emailjs.sendForm(
            'gmail',
            'template_vst6h6c',
            refForm.current
        )
        .then(
            () => {
                alert('Message successfully sent!')
                window.location.reload(false)
            },
            () => {
                alert('Failed to send message, please try again')
            }
        )
    }

    return (
        <div className='contact-container' >
            <h1>Contact Me</h1>
            <div className='contact-form' >
                <form ref={refForm} onSubmit={sendEmail} >
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