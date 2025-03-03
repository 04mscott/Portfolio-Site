import './index.scss'
import withScrollAnimation from '../Scroll'
import LandingPage from '../Landingpage'
import Sidebar from '../Sidebar'
import About from '../About'
import Skills from '../Skills'
import Projects from '../Projects'
import Contact from '../Contact'
import Footer from '../Footer'
import { useRef, useState, useEffect } from 'react'

const AnimatedAbout = withScrollAnimation(About);
const AnimatedSkills = withScrollAnimation(Skills);
const AnimatedProjects = withScrollAnimation(Projects);
const AnimatedContact = withScrollAnimation(Contact);

const Home = () => {
    const lpRef = useRef(null)
    const aboutRef = useRef(null)
    const skillsRef = useRef(null)
    const projectRef = useRef(null)
    const contactRef = useRef(null)

    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const sections = [
            { ref: lpRef, name: "home" },
            { ref: aboutRef, name: "about" },
            { ref: skillsRef, name: "skills" },
            { ref: projectRef, name: "projects" },
            { ref: contactRef, name: "contact" },
        ];

        const handleScroll = () => {
            let currentSection = '';
            sections.forEach(({ ref, name }) => {
                if (ref.current) {
                    const { top, bottom } = ref.current.getBoundingClientRect();
                    if (top <= window.innerHeight / 2 && bottom >= window.innerHeight / 2) {
                        currentSection = name;
                    }
                }
            });
            setActiveSection(currentSection);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
        <Sidebar activeSection={activeSection} lpRef={lpRef} aboutRef={aboutRef} skillsRef={skillsRef} projectRef={projectRef} contactRef={contactRef} />
            <div className='component-container' >
                <div ref={lpRef} >
                    <LandingPage projectRef={projectRef} contactRef={contactRef} aboutRef={aboutRef} />
                </div>
                <div ref={aboutRef} >
                    <AnimatedAbout/>
                </div>
                <div ref={skillsRef} >
                    <AnimatedSkills />
                </div>
                <div ref={projectRef} >
                    <AnimatedProjects />
                </div>
                <div ref={contactRef} >
                    <AnimatedContact />
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Home