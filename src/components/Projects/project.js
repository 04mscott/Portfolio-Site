import './index.scss'

const Project = ({imgPath, link, title, langs, tools}) => {
    return (
        <div className='project'>
            <a className='project-link' target='_blank' href={link} rel='noreferrer' >
                <img src={imgPath} alt='project thumbnail' />
            </a>
            <h3>{title}</h3>
            <div className='description'>
                <p>Language: {langs}</p>
                <p>Libraries / Tools: {tools}</p>
            </div>
        </div>
    )
}

export default Project