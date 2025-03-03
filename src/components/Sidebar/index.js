import './index.scss'
import { Link } from 'react-router-dom'
import Logo from '../../assets/images/Maryland_Terrapins_logo.svg.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faLayerGroup, faToolbox, faUser } from '@fortawesome/free-solid-svg-icons'

const Sidebar = ({ activeSection, lpRef, aboutRef, skillsRef, projectRef, contactRef }) => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={Logo} alt="logo"/>
        </Link>
        <nav>
            <button id='home-link' className={activeSection === 'home' ? 'active' : ''} onClick={() => lpRef.current.scrollIntoView({behavior: 'smooth'})} >
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </button>
            <button id='about-link' className={activeSection === 'about' ? 'active' : ''} onClick={() => aboutRef.current.scrollIntoView({behavior: 'smooth'})}>
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </button>
            <button id='skills-link' className={activeSection === 'skills' ? 'active' : ''} onClick={() => skillsRef.current.scrollIntoView({behavior: 'smooth'})}>
                <FontAwesomeIcon icon={faToolbox} color="#4d4d4e" />
            </button>
            <button id='projects-link' className={activeSection === 'projects' ? 'active' : ''} onClick={() => projectRef.current.scrollIntoView({behavior: 'smooth'})}>
                <FontAwesomeIcon icon={faLayerGroup} color="#4d4d4e" />
            </button>
            <button id='contact-link' className={activeSection === 'contact' ? 'active' : ''} onClick={() => contactRef.current.scrollIntoView({behavior: 'smooth'})}>
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </button>
        </nav>
    </div>
)

export default Sidebar