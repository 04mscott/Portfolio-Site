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
                        I'm a rising senior studying Computer Science at the University of Maryland, 
                        specializing in Data Science with a minor in Statistics. I'm passionate about 
                        using machine learning and analytics to uncover insights and solve real-world problems.
                    </p>
                    <p>
                        Currently, I'm interning at Experio AI, where I'm building modular LLM agent 
                        systems with LangGraph and contributing to scalable agent-driven applications.
                    </p>
                    <p>
                        I have experience across the stack, from data pipelines and backend systems to 
                        user-facing applications. I thrive on learning through hands-on work, new challenges, 
                        and collaborative problem-solving.
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