import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGitAlt,  faJsSquare, faPython } from '@fortawesome/free-brands-svg-icons'
import { faCarBattery, faScrewdriverWrench, faTerminal } from '@fortawesome/free-solid-svg-icons'



const About = () => {
    const [letterClass]=useState('text-animate')

    return(
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters letterClass={letterClass}
                        strArray={['A','b','o','u','t',' ','M','e']}
                        idx={15} />
                </h1>  
                <p>PUT TEXT HERE, PARAGRAPHS ABOUT ME</p>
                <p>PUT TEXT HERE, PARAGRAPHS ABOUT ME</p>
                <p>PUT TEXT HERE, PARAGRAPHS ABOUT ME</p>
            </div>

            <div className='stage-cube-cont'>
                <div className='cubespinner'>

                    <div className='face1'>
                        <FontAwesomeIcon icon={faPython} color='#DD0031' />
                    </div>

                    <div className='face2'>
                        <FontAwesomeIcon icon={faTerminal} color='#F06529' />
                    </div>

                    <div className='face3'>
                        <FontAwesomeIcon icon={faJsSquare} color='#28A4D9' />
                    </div>

                    <div className='face4'>
                        <FontAwesomeIcon icon={faGitAlt} color='#5ED4F4' />
                    </div>

                    <div className='face5'>
                        <FontAwesomeIcon icon={faScrewdriverWrench} color='#EFD81D' />
                    </div>

                    <div className='face6'>
                        <FontAwesomeIcon icon={faCarBattery} color= '#ec4d28' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
