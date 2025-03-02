import LogoTitle from '../../assets/images/logo-s.png'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import Logo from '../Logo'
import Loader from 'react-loaders'


const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArr = ['a', 's', 'o', 'n']
    const jobArray = ['U', 'M', 'D', ' ','S', 't', 'u', 'd', 'e', 'n', 't']

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    
        return () => clearTimeout(timer) // Cleanup function to prevent issues
    }, [])

    return(
        <>
            <div className="container home-page">
                <div className="text-zone">
                    <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i,</span>
                    <br />
                    <span className={`${letterClass} _13`}>I</span>
                    <span className={`${letterClass} _14`}>'m</span>
                    <img src={LogoTitle} alt="developer" />
                    <AnimatedLetters letterClass={letterClass} strArr={nameArr} idx={15}/>
                    <br />
                    <AnimatedLetters letterClass={letterClass} strArr={jobArray} idx={19}/>
                    </h1>
                    <h2>Data Science / Machine Learning / Software Engineering</h2>
                    <Link to='/contact' className='flat-button'>CONTACT ME</Link>
                </div>
                <Logo />
            </div>
            <Loader type="ball-pulse-sync" />
        </>
    )
}

export default Home