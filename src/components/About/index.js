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
                        CS grad from the University of Maryland, where I studied Computer Science 
                        (Data Science track) with a minor in Statistics.
                    </p>
                    <p>
                        Most recently I interned at Experio AI, building agentic LLM systems and document processing 
                        pipelines from scratch. Before that, I led data engineering on EngageCS, a production analytics 
                        platform commissioned by a UMD instructor and used live in his courses.
                    </p>
                    <p>
                        I care about building things that actually work; clean data models, well-designed systems, 
                        and software that holds up under real use.
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