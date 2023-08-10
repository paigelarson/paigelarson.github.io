import { useRef } from 'react'
import Me from '../../../assets/me.jpg'
import './index.scss'

const Logo = () => {
  const bgRef = useRef()
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