import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import {useState} from 'react'

const Projects = () => {
    const [letterClass]=useState('text-animate')

    return(
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters letterClass={letterClass}
                        strArray={['M','y',' ','P','r','o','j','e','c','t','s']}
                        idx={15} />
                </h1>  
                <p>PUT TEXT HERE, PARAGRAPHS ABOUT ME</p>
                <p>PUT TEXT HERE, PARAGRAPHS ABOUT ME</p>
                <p>PUT TEXT HERE, PARAGRAPHS ABOUT ME</p>
            </div>
        </div>
    )
}

export default Projects
