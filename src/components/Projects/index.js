import './index.scss'
import reportPdf from '../../assets/files/HW 3 Report - Mason Scott.pdf'
import reportPng from '../../assets/images/report.PNG'
import airApp from '../../assets/images/app_example.png'
import sortingBm from '../../assets/images/All (10).png'
import maskApp from '../../assets/images/incorrect_mask.png'
import Project from './project'
import withScrollAnimation from '../Scroll'


const AnimatedProject = withScrollAnimation(Project, 1)

const Projects = () => {
    return (
        <div className='project-container' >
            <h2>Projects</h2>
            <div className='project-grid' >
                <div className='row'>
                    <AnimatedProject imgPath={airApp} link={'https://air-quality-app-wr4z.onrender.com/'} title={'Air Quality Prediction App'} langs={'Python'} tools={'TensorFlow, Pandas, AWS, MySQL, StreamLit, OpenWeatherMap API'} />
                    <AnimatedProject imgPath={maskApp} link={'https://04mscott.github.io/Face-Mask-Image-Classification/'} title={'Face Mask Image Classifier'} langs={'Python'} tools={'TensorFlow, Numpy, TaiPy'} />
                </div>
                <div className='row'>
                    <AnimatedProject imgPath={sortingBm} link={'https://04mscott.github.io/Sorting-Functions-C-/'} title={'C Sorting Algorithms Benchmarks'} langs={'C, Python'} tools={'Libraries / Tools: MatPlotLib, Seaborn, Numpy'} />
                    <AnimatedProject imgPath={reportPng} link={reportPdf} title={'Data Analysis Report'} langs={'Python'} tools={'Pandas, MatPlotLib, Seaborn, Scipi Stats, Numpy'} />
                </div>
            </div>
        </div>
    )
}

export default Projects