import './index.scss'
import Loader from 'react-loaders'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'


const LandingPage = ({ projectRef, contactRef, aboutRef }) => {

    return(
        <>
            <div className="container home-page">
                <div className="text-zone">
                    <h1>Mason Scott</h1>
                    <h2>Data Science | Machine Learning | Software Engineering</h2>
                    <div className='social-media-container'>
                        <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/mason-t-scott/'>
                            <div>
                                <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e' />
                            </div>
                        </a>
                        <a target="_blank" rel='noreferrer' href='https://github.com/04mscott'>
                            <div>
                                <FontAwesomeIcon icon={faGithubSquare} color='#4d4d4e' />
                            </div>
                        </a>
                    </div>
                    <div className='button-container'>
                        <button className='flat-button' onClick={() => contactRef.current.scrollIntoView({behavior: 'smooth'})}>
                            Contact Me
                        </button>
                        <button className='flat-button' onClick={() => projectRef.current.scrollIntoView({behavior: 'smooth'})}>
                            Projects
                        </button>
                    </div>
                    <div className='scroll-arrow' >
                        <button rel='noreferrer' onClick={() => aboutRef.current.scrollIntoView({behavior: 'smooth'})} >
                            <p>Scroll Down</p>
                            <FontAwesomeIcon icon={faArrowDown} color='#4d4d4e' />
                        </button>
                    </div>
                </div>
            </div>
            <Loader type="ball-pulse-sync" />
        </>
    )
}

export default LandingPage