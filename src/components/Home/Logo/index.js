import { useEffect, useRef } from 'react'
import gsap from 'gsap-trial'
import Me from '../../../assets/me.jpg'
import './index.scss'

const Logo = () => {
  const bgRef = useRef()
  const outlineLogoRef = useRef()
  const solidLogoRef = useRef()

  return (
    <div className="logo-container" ref={bgRef}>
      <img
        className="solid-logo"
        src={Me}
        alt="JavaScript,  Developer"
      />

     
    </div>
  )
}

export default Logo