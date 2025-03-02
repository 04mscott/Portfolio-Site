import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAws, faGitAlt, faJava, faJsSquare, faPython, faReact } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    
        return () => clearTimeout(timer) // Cleanup function to prevent issues
    }, [])


    return (
        <>
        <div className='containter about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters letterClass={letterClass} strArr={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']} idx={15} />
                </h1>
                <p>
                I'm a very ambitious Computer Science student at the University of Maryland 
                with a deep passion for solving complex problems through technology. 
                </p>
                <p>
                I thrive in environments that challenge me to think critically and innovate, and 
                I'm eager to contribute to a company that pushes the boundaries of what can be 
                achieved with Data Science, Machine Learning, and Software Engineering.
                </p>
                <p>
                I'm always learning new skills and pushing myself to be better at my 
                craft, constantly seeking opportunities to grow and make an impact.
                </p>
            </div>
            
            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faPython} color='#ffde57' />
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faJava} color='#007399' />
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faAws} color='#FF9900' />
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faJsSquare} color='#EFD81D' />
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faReact} color='#5ED4F4 ' />
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faGitAlt} color='#EC4D28' />
                    </div>
                </div>
            
            </div>
        </div>
        <Loader type="ball-pulse-sync"/>
        </>
    )
}

export default About