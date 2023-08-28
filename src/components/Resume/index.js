import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState } from 'react'
import resume from '../../assets/Paige_Larson_Resume.pdf'





const Resume = () => {
    const [letterClass] = useState('text-animate')

    return (
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters letterClass={letterClass}
                        strArray={['M', 'y', ' ', 'R', 'e', 's', 'u', 'm', 'e']}
                        idx={15} />
                </h1>
        
              

            </div>


        </div>
    )
}

export default Resume
