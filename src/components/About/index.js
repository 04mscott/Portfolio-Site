import './index.scss'
import ProfileImg from '../../assets/images/profile.png'
import ResumeDoc from '../../assets/files/Mason_Scott_Resume.pdf'

const About = () => {
    return (
        <div className='about-container'>
            <div className='title-container' >
                <h2>About Me</h2>
            </div>
            <div className='section-container' >
                <img src={ProfileImg} alt='profile' />
                <div className='text-container'>
                    <p>
                        I'm a Computer Science student at the University of Maryland (Data Science track, Statistics minor)
                        with a strong interest in building practical, production-minded systems.
                    </p>
                    <p>
                        I'm currently an AI Engineering Intern at Experio AI, where I design and implement agentic LLM
                        systems from scratch to parse, structure, and reason over large, unstandardized RFP documents.
                    </p>
                    <p>
                        My experience spans backend systems, data pipelines, and full-stack applications, with a focus
                        on ownership, clean system design, and learning through hands-on engineering work.
                    </p>

                </div>
            </div>
            <a target="_blank" rel='noreferrer' href={ResumeDoc}>
                <button className='resume-button' >Download My Resume</button>
            </a>
        </div>
    )
}

export default About