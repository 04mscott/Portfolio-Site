import './index.scss'
import reportPdf from '../../assets/files/UMD CMSC320 HW 3 Report - Mason Scott.pdf'
import reportPng from '../../assets/images/report.PNG'
import airApp from '../../assets/images/app_example.png'
import sortingBm from '../../assets/images/All (10).png'
import maskApp from '../../assets/images/incorrect_mask.png'
import recAPI from '../../assets/images/api_flowchart.png'
import impulse from '../../assets/images/impulse-demo.png'
import engagecs from '../../assets/images/engagecs-graphs.png'
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
                        <AnimatedProject imgPath={engagecs} link={'https://04mscott.github.io/EngageCS/'} title={'EngageCS - Student Engagement Analytics Platform'} langs={'Python, SQL'} tools={'Dash, Flask, PostgreSQL, Celery, Docker, Canvas LMS API, Plotly'} />
                        <AnimatedProject imgPath={impulse} link={'https://04mscott.github.io/Impulse-Music-Recs/'} title={'Impulse - Music Recommendation App'} langs={'JavaScript, Java, Python'} tools={'React, Spring Boot, FastAPI, Docker, Redis, Celery, MySQL'} />
                    </div>
                    <div className='sub_row'>
                        <AnimatedProject imgPath={recAPI} link={'https://04mscott.github.io/Recommendation-API/'} title={'Recommendation Engine API'} langs={'Python'} tools={'FastAPI, Pandas, Numpy, Sklearn, Docker, Celery, Redis'} />
                        <AnimatedProject imgPath={airApp} link={'https://04mscott.github.io/Air-Quality-App//'} title={'Air Quality Prediction App - LSTM'} langs={'Python'} tools={'TensorFlow, Pandas, AWS, MySQL, StreamLit, OpenWeatherMap API'} />
                    </div>
                </div>
                <div className='row'>
                    <div className='sub_row'>
                        <AnimatedProject imgPath={maskApp} link={'https://04mscott.github.io/Face-Mask-Image-Classification/'} title={'Face Mask Image Classifier - CNN'} langs={'Python'} tools={'TensorFlow, Numpy, TaiPy'} />
                        <AnimatedProject imgPath={sortingBm} link={'https://04mscott.github.io/Sorting-Functions-C-/'} title={'C Sorting Algorithms Benchmarks'} langs={'C, Python'} tools={'MatPlotLib, Seaborn, Numpy'} />
                    </div>
                    <div className='sub_row'>
                        <AnimatedProject imgPath={reportPng} link={reportPdf} title={'Data Analysis Report'} langs={'Python'} tools={'Pandas, MatPlotLib, Seaborn, SciPy Stats, Numpy'} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects