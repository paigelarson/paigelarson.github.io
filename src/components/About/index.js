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
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters letterClass={letterClass}
                        strArray={['A','b','o','u','t',' ','M','e']}
                        idx={15} />
                </h1> 
                <div className='abouts'>
                <p>Hi, my name is Paige Larson and I am a creator. No, not a content creator, but a creator in the sense that I bring ideas from just that, ideas, into existance. From
                    website development and game design to embedded systems and controls algorithms, I'm passionate about taking my projects throught the full design cycle from scheme 
                    to plan to product. As a creative thinker, I thrive in coming up with outside-the-box solutions to complex and compelling problems.</p>
                <p>
                    I am a rising 3rd year at the University of California, Los Angeles working towards a B.S. in Computer Science and Engineering. Some of my relevent coursework includes 
                    Operating Systems, Computer Programming in C/C++, Computer Architecture, Intro to Electrical Engineering, Computer Graphics,  and Discrete Structures. I'm also pretty 
                    heavily involved with Bruinracing's Baja SAE racing team, where I, as electronics lead, oversee the code design and manufacturing of an Electronic 
                    Transmission System (you can learn more about this in the projects section). </p>

                <p>When I'm not glued to my computer, I enjoy aquainting myself with the great outdoors. Whether its hiking, camping, running, or just reading a book in my hammock, spending time in the sunshine
                    is my favorite way to relax. I also enjoy expressing my creativity outside of engineering by tinkering, painting, and sewing</p>
                </div>
            </div>

            
        </div>
    )
}

export default About
