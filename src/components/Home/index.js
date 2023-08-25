import { Link } from "react-router-dom";
import './index.scss'
import { useState } from "react";
import AnimatedLetters from "../AnimatedLetters";
import Logo from './Logo'


const Home= () => {
    const [letterClass]=useState('text-animate')
    const nameArray=['P','a','i','g','e']
    const jobArray=['A','','S','o','f','t','w','a','r','e',' ','E','n','g','i','n','e','e','r']

    return(
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                     
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i, </span> 
                    <br/> 
                    <span className={`${letterClass} _13`}>I</span> 
                    <span className={`${letterClass} _14`}>'m </span>  
                    <span className={`${letterClass} _14`}> </span>   
                    <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15} />
                    <br/>
                    <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={22} />
                </h1>
                <h2>Operations Security | Electronics Experimentation | Control Systems</h2>
                <Link to="/contact" className="flat-button">
                    CONTACT
                </Link>
            </div>
            
        </div>
    )
}

export default Home
