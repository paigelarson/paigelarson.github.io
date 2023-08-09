import './index.scss'
import {Link, NavLink } from 'react-router-dom'
import Logo from '../../assets/initials.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiagramProject, faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () =>(
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={Logo} alt="logo!"/>
        </Link>
    
    <nav>
        <NavLink exact="true" activeclassname="active" to="/">
            <FontAwesomeIcon icon={faHome} color='#cc8b86'/>
        </NavLink>

        <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
            <FontAwesomeIcon icon={faUser} color='#cc8b86'/>
        </NavLink>

        <NavLink exact="true" activeclassname="active" className="projects-link" to="/projects">
            <FontAwesomeIcon icon={faDiagramProject} color='#cc8b86'/>
        </NavLink>

        <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
            <FontAwesomeIcon icon={faEnvelope} color='#cc8b86'/>
        </NavLink>
    </nav>
    <ul>
        <li>
            <a target='blank' rel='noreferrer' href='https://www.linkedin.com/in/meet-paige-larson/'>
                <FontAwesomeIcon icon={faLinkedin} color="$cc8b86"/>
            </a>
        </li>
        <li>
            <a target='blank' rel='noreferrer' href='https://github.com/paigelarson'>
                <FontAwesomeIcon icon={faGithub} color="$cc8b86"/>
            </a>
        </li>
    </ul>
    </div>   
)

export default Sidebar