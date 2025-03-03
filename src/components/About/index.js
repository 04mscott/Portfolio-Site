import './index.scss'
import ProfileImg from '../../assets/images/profile.png'
import ResumeDoc from '../../assets/files/Mason_Scott_Resume.pdf'

const About = () => {
    return (
        <div className='about-container'>
            <div className='title-container' >
                <h2>About Me</h2>
            </div>
            <div className='text-container' >
                <img src={ProfileImg} alt='profile' />
                <p>
                    I am Mason Scott, a third-year Computer Science student at the University of
                    Maryland - College Park, specializing in Data Science and Machine
                    Learning. With a strong foundation in Software Engineering, I thrive
                    on solving complex problems and continuously expanding my skill set.
                    I'm seeking opportunities to apply my expertise in a dynamic,
                    forward-thinking company where I can contribute meaningfully and
                    grow as an engineer.
                </p>
            </div>
            <a target="_blank" rel='noreferrer' href={ResumeDoc}>
                <button className='resume-button' >Download My Resume</button>
            </a>
        </div>
    )
}

export default About