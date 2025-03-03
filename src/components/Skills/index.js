import './index.scss'
import pythonSVG from '../../assets/images/icons8-python-144.png'
import javaSVG from '../../assets/images/icons8-java-144.png'
import cSVG from '../../assets/images/icons8-c-programming-144.png'
import javascriptSVG from '../../assets/images/icons8-javascript-144.png'
import cssSVG from '../../assets/images/icons8-css-logo-144.png'
import htmlSVG from '../../assets/images/icons8-html-5-144.png'
import sqlSVG from '../../assets/images/icons8-sql-96.png'

import pandasSVG from '../../assets/images/icons8-pandas-96.png'
import tensorflowSVG from '../../assets/images/icons8-tensorflow-144.png'
import mysqlSVG from '../../assets/images/icons8-mysql-144.png'
import awsSVG from '../../assets/images/icons8-aws-144.png'
import jupyterSVG from '../../assets/images/icons8-jupyter-144.png'
import reactSVG from '../../assets/images/icons8-react-160.png'
import springbootSVG from '../../assets/images/icons8-spring-boot-80.png'

import vscodeSVG from '../../assets/images/icons8-vs-code-144.png'
import pycharmSVG from '../../assets/images/icons8-pycharm-144.png'
import intellijSVG from '../../assets/images/icons8-intellij-idea-144.png'

const Skills = () => {
    return (
        <div className='skills-container' >
            <h2>Skills</h2>
            <div className='contents'>
                <div className='legend' >
                    <h3>Languages:</h3>
                    <h3>Frameworks & Libraries:</h3>
                    <h3>Tools & Platforms:</h3>
                </div>
                <div className='images' >
                    <div className='language-images' >
                        <img src={pythonSVG} alt='python' />
                        <img src={javaSVG} alt='java' />
                        <img src={cSVG} alt='c' />
                        <img src={sqlSVG} alt='sql' />
                        <img src={javascriptSVG} alt='javascript' />
                        <img src={cssSVG} alt='sass' />
                        <img src={htmlSVG} alt='html' />
                    </div>
                    <div className='framework-images' >
                        <img src={pandasSVG} alt='pandas' />
                        <img src={tensorflowSVG} alt='tensorflow' />
                        <img src={reactSVG} alt='react' />
                        <img src={springbootSVG} alt='springboot' />
                    </div>
                    <div className='tool-images' >
                        <img src={jupyterSVG} alt='jupyter' />
                        <img src={mysqlSVG} alt='mysql' />
                        <img src={awsSVG} alt='aws' />
                        <img src={vscodeSVG} alt='vscode' />
                        <img src={pycharmSVG} alt='pycharm' />
                        <img src={intellijSVG} alt='intellij' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills