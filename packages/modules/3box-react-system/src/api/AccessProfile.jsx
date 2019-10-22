/**
 * @function AccessLogin
 * @description Require 3Box isLoggedIn state to access children. 
 * @param {Object} props 
 */
/* --- Global --- */
import React from 'react'
import PropTypes from 'prop-types'
import { BoxContext } from '3box-react-state'
import { useLoggedInEffect } from './effects'

/* --- Local --- */
import { Component } from './component'
import Login from './Login'
import { Avatar } from '..'

const AccessLogin = ({ box, children, ...props }) => { 
  // ? React.cloneElement(props.componentisLoggedIn)
  // : isElement(props.componentisLoggedIn)

  return useLoggedInEffect(box)
  ? children || Component(props.componentisLoggedIn)
  : <Login {...props} />
}

AccessLogin.defaultProps = {
  componentLogin: <Login />,  
  componentisLoggedIn: <Avatar />,  
  isloginAuto: false,
  isLoginDisabled: false,  
}

AccessLogin.propTypes = {
  componentLogin: PropTypes.func,
  isloginAuto: PropTypes.bool,
  isLoginDisabled: PropTypes.bool,
}

export default props =><BoxContext>{ box => ( <AccessLogin box={box} {...props} /> )}</BoxContext>