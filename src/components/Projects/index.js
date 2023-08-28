import './index.scss';
import React from 'react';
import AnimatedLetters from '../AnimatedLetters';
import { useState } from 'react';
import { motion, easeIn } from 'framer-motion';
import web from '../../assets/website.png'
import bh from '../../assets/bh_internship.jpg'
import baja from '../../assets/baja_present.JPG'
const Projects = () => {
    const [letterClass] = useState('text-animate')

    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);
    const [isOpen4, setIsOpen4] = useState(false);



    return (
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters letterClass={letterClass}
                        strArray={['M', 'y', ' ', 'P', 'r', 'o', 'j', 'e', 'c', 't', 's', ' ', 'a', 'n', 'd', ' ', 'E', 'x', 'p', 'e', 'r', 'i', 'e', 'n', 'c', 'e']}
                        idx={15} />
                </h1>
                <motion.div transition={{ layout: { duration: .5, type: easeIn } }} layout onClick={() => setIsOpen1(!isOpen1)} className='card'>
                    <div className='cardtext'>
                        <motion.p layout='position'>Current WIP: 65% Mechanical Keyboard</motion.p>
                        {isOpen1 && (
                            <motion.div className='expand'>
                                <p>I'm currently in the process of building a mechanical keyboard from the ground up.
                                    I'm soldering all resistors, diodes, LED aspects, switches, and the motorcontroller into a through hole PCB and using firmware
                                    to get it up and running. I will post more about this project as it progresses!  </p>
                                
                            </motion.div>
                        )}
                    </div>
                </motion.div>

                <motion.div transition={{ layout: { duration: .5, type: easeIn } }} layout onClick={() => setIsOpen2(!isOpen2)} className='card'>
                    <div className='cardtext'>
                        <motion.p layout='position'>Bruinracing Baja SAE</motion.p>
                        
                            <img src={baja} alt='javascript screencap' />
                       
                        {isOpen2 && (
                            <motion.div className='expand'>
                                <p>Baja SAE is an annual competition hosted by the Society of Automotive Engineers to design, build, and race a single-seat off-road car, similar to a 
                                    dune buggy. Bruinracing's Baja team is unique in the sense that we are one of only 4 teams in the country to have an ECVT, Electronically-Actuated Continuous Variable Transmission, which
                                    is controlled via software. As Electronics Lead, it is my job to oversee the design, manufacture, and testing of both the hardware and software aspects
                                    this system. This includes, the actuator itself, all sensors that contribute to the movement of the actuator, numerous other sensors used for data aquisition, power sources,
                                    and wiring of the break lights, kill switches, any necessary radio capabilities. Once the system is complete, we go through the process of testing and tuning hardware and 
                                    software for maximum performance. We take our car to multiple national competitions each year, placing in events of all catagories, from manuverability,
                                    acceleration, and rock climb, to a four hour endurace race.
                                </p>

                            </motion.div>
                        )}
                    </div>
                </motion.div>

                <motion.div transition={{ layout: { duration: .5, type: easeIn } }} layout onClick={() => setIsOpen3(!isOpen3)} className='card'>
                    <div className='cardtext'>
                        <motion.p layout='position'>This Website</motion.p>
                        
                            <img src={web} alt='javascript screencap' />
                       
                        {isOpen3 && (
                            <motion.div className='expand'>
                                <p>Of course, I have to include this website here, since it is, to date, one of my most immersive forays into React. I began by posting my basic react app
                                    to github pages using the npm framework. Then, I began using my knowledge of CSS and Javascript to build an immersive and informative website with an 
                                    interactive UI and developed backend.
                                </p>

                            </motion.div>
                        )}
                    </div>
                </motion.div>

                <motion.div transition={{ layout: { duration: .5, type: easeIn } }} layout onClick={() => setIsOpen4(!isOpen4)} className='card'>
                    <div className='cardtext'>
                        <motion.p layout='position'>Cybersecurity and Operational Technology</motion.p>
                        <img src={bh} alt='javascript screencap' />
                        {isOpen4 && (
                            <motion.div className='expand'>
                                <p>Throughout the summer of 2023, I spent 12 weeks working at Baker Hughes as a Cybersecurity Software Engineer. I worked with the
                                    Security Operations Team to develop their device management portfolio. This involved writing several automation scripts in python and Powershell
                                    for use
                                    within BeyondTrust Privileged Remote Access, specifically using their API to do so. I also onboarded device traffic sensors within
                                    the Microsoft Defender for IOT, allowing me to monitor activity and manage alerts on various types of machinery. I also worked within
                                    our phishing prevention department to write API based scripts that recognize, report, and reset compromised usernames and passwords.
                                </p>
                            </motion.div>
                        )}
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Projects



