import React from 'react'
import './custom-button.style.scss'
function CustomButton({children,isGoogleSignIn,inverted,...otherProps}) {
  return (
    <button  className= {`${inverted ? 'inverted' : ''} ${isGoogleSignIn? 'googleSignIn': ''} custom-button`}{...otherProps}>
      {children}
    </button>
  )
}

export default CustomButton
