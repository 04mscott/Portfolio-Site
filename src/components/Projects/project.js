import './index.scss'

const Project = ({imgPath, link, title, langs, tools}) => {
    return (
        <a className='project-link' target='_blank' href={link} rel='noreferrer' >
            <div className='project'>
                <img src={imgPath} alt='project thumbnail' />
                <h3>{title}</h3>
                <div className='description'>
                    <p>Language: {langs}</p>
                    <p>Libraries / Tools: {tools}</p>
                </div>
            </div>
        </a>
    )
}

export default Project