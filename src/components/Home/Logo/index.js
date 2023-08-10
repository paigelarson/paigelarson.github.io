import Me from '../../../assets/me.jpg'
import './index.scss'

const Logo = () => {
 
  return (
    <div className="logo-container" >
      <img
        className="solid-logo"
        src={Me}
        alt="JavaScript,  Developer"
      />
    </div>
  )
}

export default Logo