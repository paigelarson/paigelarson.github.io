import './index.scss';
import React from 'react';
import AnimatedLetters from '../AnimatedLetters';
import { useState } from 'react';
import { motion, easeIn } from 'framer-motion';
import web from '../../assets/website.png'
import bh from '../../assets/bh_internship.jpg'
import baja from '../../assets/baja_banquet.jpg'
import baja_1 from '../../assets/me_computer.jpg'
import baja_2 from '../../assets/baja_car_whole.jpg'
import stellantis from '../../assets/stell_me_crop.jpg'
const Projects = () => {
    const [letterClass] = useState('text-animate')

    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);
    const [isOpen4, setIsOpen4] = useState(false);
    const [isOpen5, setIsOpen5] = useState(false);


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
                        <motion.p layout='position'>Stellantis & the Automotive Industry</motion.p>
                        
                            <img src={stellantis} alt='javascript screencap' />
                       
                        {isOpen2 && (
                            <motion.div className='expand'>
                                <p>
                                I spent this past summer as a Software Engineering Intern at Stellantis,specializing in Electrical Hardware Engineering. 
                                Stellatnis is an international car manufacturer, with several recognizable brands in their repetoire, such as Jeep, Dodge, 
                                Alfa Romeo, Maserati, and Peugeot. Working with the Connectivity, Infotainment, Audio, and Peripherals team, I had 
                                the opportunity to take on Design Release Engineer responsibilities, 
                                leveraging CANbus to investigate, diagnose, and resolve complex issues within vehicle hardware and software systems. 
                                This role not only challenged my technical skills but also sharpened my problem-solving abilities. I also developed 
                                programs to extract part information from databases and map components in NX/Teamcenter CAD models, streamlining our 
                                workflow and enhancing accuracy. Additionally, I conducted in-depth competitive benchmarking on audio and peripheral 
                                systems, providing valuable insights that will drive future part development.
                                </p>

                            </motion.div>
                        )}
                    </div>
                </motion.div>

                <motion.div transition={{ layout: { duration: .5, type: easeIn } }} layout onClick={() => setIsOpen3(!isOpen3)} className='card'>
                    <div className='cardtext'>
                        <motion.p layout='position'>Bruinracing Baja SAE</motion.p>
                        
                            <img src={baja} alt='baja screencap' />
                       
                        {isOpen3 && (
                            <motion.div className='expand'>
                                <p>Baja SAE is an annual competition hosted by the Society of Automotive Engineers to design, build, and race a single-seat off-road car, similar to a 
                                    dune buggy. Bruinracing's Baja team is unique in the sense that we are one of only 4 teams in the country to have an ECVT, Electronically-Actuated Continuous Variable Transmission, which
                                    consists of a linear actuating system controlled via software. As Electronics Lead, it was my job to oversee the design, manufacture, and testing of both the hardware and software aspects
                                    this system for the Model 23 Vehicle. This included, the actuator itself, all sensors that contribute to the movement of the actuator, numerous other sensors used for data aquisition, power sources,
                                    and wiring of the break lights, kill switches, any necessary radio capabilities (I, of course, can't get too into specifics online, it is a competition after all). Once the system is complete, we go through the process of testing and tuning hardware and 
                                    software for maximum performance. We take our car to multiple national competitions each year, placing in events of all catagories, from manuverability,
                                    acceleration, and rock climb, to a four hour endurace race. I have taken on the role of Managing Director for Model 24, as this allows me to take on greater leadership within the team. 
                                </p>
                                <img src={baja_1} alt='baja screencap' />
                                <img src={baja_2} alt='baja screencap' />
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
                                    within BeyondTrust Privileged Remote Access, specifically using REST API to do so. I also onboarded over a dozen device traffic sensors within
                                    the Microsoft Defender for IOT, allowing me to monitor activity and manage alerts on various types of machinery over the area of 3 continents. I also worked within
                                    our phishing prevention team to write API based scripts that recognize, report, and reset compromised usernames and passwords.
                                </p>
                            </motion.div>
                        )}
                    </div>
                </motion.div>

                <motion.div transition={{ layout: { duration: .5, type: easeIn } }} layout onClick={() => setIsOpen5(!isOpen5)} className='card'>
                    <div className='cardtext'>
                        <motion.p layout='position'>This Website</motion.p>
                        
                            <img src={web} alt='javascript screencap' />
                       
                        {isOpen5 && (
                            <motion.div className='expand'>
                                <p>Of course, I have to include this website here, since it is, to date, one of my most immersive forays into React. 
                                   It involved creating a base repository on Github, as I am hosting from Github Pages. Then I used knowledge of Javascript,
                                   HTML, and CSS to create and design each page, button, and link. This of course involved a lot of trial and error. I also 
                                   enjoyed being able to exercise my git abilities, as I used git protocols and commands, combined with npm interface, to build and
                                   deploy the site. 
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



