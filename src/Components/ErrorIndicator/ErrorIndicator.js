import React from 'react'

import './ErrorIndicator.css'
import icon from './death-star.png'

const ErrorIndicator = () => {
  return (
    <div className="error-indicator">
      <img style={{width: '50px'}} src={icon} alt="death star" />
      <span className="boom">BOOM!</span>
      <span>
        something has gone terribly wrong
      </span>
      <span>
        (but we already sent droids to fix ot)
      </span>
    </div>
  )
}

export default ErrorIndicator