import './index.scss'
import reportPdf from '../../assets/files/UMD CMSC320 HW 3 Report - Mason Scott.pdf'
import reportPng from '../../assets/images/report.PNG'
import airApp from '../../assets/images/app_example.png'
import sortingBm from '../../assets/images/All (10).png'
import maskApp from '../../assets/images/incorrect_mask.png'
import recAPI from '../../assets/images/api_flowchart.png'
import impulse from '../../assets/images/impulse-demo.png'
import Project from './project'
import withScrollAnimation from '../Scroll'


const AnimatedProject = withScrollAnimation(Project, 1)

const Projects = () => {
    return (
        <div className='project-container' >
            <h2>Projects</h2>
            <div className='project-grid' >
                <div className='row'>
                    <div className='sub_row'>
                        <AnimatedProject imgPath={impulse} link={'https://04mscott.github.io/Impulse-Music-Recs/'} title={'Impulse - Music Recommendation App'} langs={'JavaScript, Java, Python'} tools={'React, Spring Boot, FastAPI, Docker, Redis, Celery, MySQL'} />
                        <AnimatedProject imgPath={recAPI} link={'https://04mscott.github.io/Recommendation-API/'} title={'Recommendation Engine API'} langs={'Python'} tools={'FastAPI, Pandas, Numpy, Sklearn, Docker, Celery, Redis'} />
                    </div>
                    <div className='sub_row'>
                        <AnimatedProject imgPath={airApp} link={'https://air-quality-app-wr4z.onrender.com/'} title={'Air Quality Prediction App - LSTM'} langs={'Python'} tools={'TensorFlow, Pandas, AWS, MySQL, StreamLit, OpenWeatherMap API'} />
                        <AnimatedProject imgPath={maskApp} link={'https://04mscott.github.io/Face-Mask-Image-Classification/'} title={'Face Mask Image Classifier - CNN'} langs={'Python'} tools={'TensorFlow, Numpy, TaiPy'} />
                    </div>
                </div>
                <div className='row'>
                    <div className='sub_row'>
                        <AnimatedProject imgPath={sortingBm} link={'https://04mscott.github.io/Sorting-Functions-C-/'} title={'C Sorting Algorithms Benchmarks'} langs={'C, Python'} tools={'MatPlotLib, Seaborn, Numpy'} />
                        <AnimatedProject imgPath={reportPng} link={reportPdf} title={'Data Analysis Report'} langs={'Python'} tools={'Pandas, MatPlotLib, Seaborn, SciPy Stats, Numpy'} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects