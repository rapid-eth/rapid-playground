/* --- Global Dependencies --- */
import React, { useState } from 'react'
import { Span } from '@horizin/design-system-atoms'
import { BoxInject } from '3box-react-state'
import { useSpaceOpenRequestEffect } from './effects'

/* --- React Component --- */
const OpenSpace = ({ box, isMenuAvailable, styled, ...props }) => {
  const [ request, setRequest ] = useState(props.auto)
  // const [ , set ] = useState(props.auto)
  const login = useSpaceOpenRequestEffect(box, {
    space: props.space,
    request
  })

  /* --- Effects --- */
  return (
    <>
    {
      login.isLoggedIn &&
      <A.Span>
        {props.children || props.componentIsLoggedIn}
      </A.Span>
    }
    {
      login.isDispatched && !login.isLoggedIn &&
      <A.Span>
        {props.componentIsLoading}
      </A.Span>
    }
    {
      !login.isDispatched && !login.isLoggedIn &&
      <A.Span onClick={setRequest} >
        {props.componentIsLoggedOut}
      </A.Span>
    }
    </>
  )
}

OpenSpace.defaultProps = {
  componentIsLoggedOut: <Span pointer xxs tag='white'>Open Space <A.Span opacity={.6} pl={1} ><A.LoadingSquare /></A.Span></Span>,
  componentIsLoading: <Span pointer xxs tag='white'>Opening Space <A.Span pl={1}><A.LoadingSquare className='active' /></A.Span></Span>,
  componentIsLoggedIn: <Span pointer xxs tag='green'>space</Span>,
}

OpenSpace.propTypes = {
  spaceAuto: PropTypes.bool
}

export default props =>
<BoxInject>
  <OpenSpace {...props} />
</BoxInject>