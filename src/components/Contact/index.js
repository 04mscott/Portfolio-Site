import './index.scss'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    
        return () => clearTimeout(timer) // Cleanup function to prevent issues
    }, [])
    
    return(
        <>
            <div className='container contact-page'>
                <div className='text-zone '>
                    <h1>
                        <AnimatedLetters letterClass={letterClass} strArr={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e']} idx={15}/>
                    </h1>
                    <p>
                        If you're interesting in reaching out for questions or opportunities
                        <br />please don't hesitate to contact me using the form below!
                    </p>
                    <div className='contact-form'>
                        <form>
                            <ul>
                                <li className='half'>
                                    <input type='text' name='name' placeholder='Name' required />
                                    <input type='email' name='email' placeholder='Email' required />
                                </li>
                                <li>
                                    <input type='text' name='subject' placeholder='Subject' required /> 
                                </li>
                                <li>
                                    <textarea name='message' placeholder='Message' required></textarea>
                                </li>
                                <li>
                                    <input type='submit' className='flat-button' value='SEND' required /> 
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>

            </div>
            <Loader type="ball-pulse-sync" />
        </>
    )
}

export default Contact