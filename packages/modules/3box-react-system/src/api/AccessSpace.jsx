/* --- Global Dependencies --- */
import React, { useEffect, useState } from 'react'
import { BoxContext } from '3box-react-state'
import { useSpaceReadyEffect, useLoggedInEffect } from './effects'

import LoginButton from './LoginButton'
import Login from './Login'
import SpaceOpen from './SpaceOpen'
/**
 * @function AccessSpaces
 * @param {*} props 
 */
const AccessSpaces = ({ box, ...props }) => { 
  const isLoggedIn = useLoggedInEffect(box)
  const isSpaceReady = useSpaceReadyEffect(box, props)
  return(
    <>
      {
        isLoggedIn
        ? null
        : <Login
            isLoggedIn={props.children}
            {...props}
          />
      }

      {
        isLoggedIn && !isSpaceReady
        ? <SpaceOpen space={props.space} auto={props.spaceAuto} />
        : null
      }
      
      {
        isLoggedIn && isSpaceReady
        ? props.children
        : null
      }
  
    </>
)}

AccessSpaces.defaultProps = {
  componentLogin: <Login />,  
  loginAuto: false,
  spaceAuto: false,
  threadAuto: false,
  isLoginDisabled: false,
  
}

AccessSpaces.propTypes = {
  space: PropTypes.string,
}

export default props =>
<BoxContext>
  { box => ( <AccessSpaces box={box} {...props} /> )}
</BoxContext>