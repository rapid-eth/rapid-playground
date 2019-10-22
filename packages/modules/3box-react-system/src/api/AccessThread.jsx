/**
 * @function AccessThread
 * @description Manage access to the a 3Box Space Thread.
 */
/* --- Global --- */
import React from 'react'
import { BoxContext } from '3box-react-state'
import { 
  useSpaceReadyEffect,
  useThreadReadyEffect,
  useLoggedInEffect
} from './effects'

/* --- Local --- */
import Login from './Login'
import SpaceOpen from './SpaceOpen'
import ThreadJoin from './ThreadJoin'

/* --- Component --- */
const AccessThread = ({ box, ...props }) => { 
  const isLoggedIn = useLoggedInEffect(box)
  const isSpaceReady = useSpaceReadyEffect(box, props)
  const thread = useThreadReadyEffect(box, props)
  
  console.log(isSpaceReady, thread, 'AccessThread')

  return(
    <>
      {
        isLoggedIn
        ? null
        : <Login
            isLoggedIn={props.children}
            componentIsLoggedOut={props.componentIsLoggedOut}
            componentIsLoading={props.componentIsLoading}
            componentIsLoggedIn={props.componentIsLoggedIn}
          />
      }

      {/* Space Open States */}
      {
        isLoggedIn && !isSpaceReady
        ? <SpaceOpen
            space={props.space}
            auto={props.spaceAuto}
            componentIsClosed={props.componentIsClosed}
            componentIsLoading={props.componentIsLoading}
            componentIsOpen={props.componentIsOpen}
          />
        : null
      }

      {/* Thread Join States */}
      {
        isLoggedIn && 
        isSpaceReady && 
        !thread.isReady
        ? <ThreadJoin
            auto={props.threadAuto} 
            space={props.space}
            threadName={props.threadName}
            options={props.threadOptions}
            componentIsClosed={props.componentIsThreadClosed}
            componentIsLoading={props.componentIsThreadLoading}
            componentIsJoined={props.componentIsThreadJoined}
          />
        : null
      }
      
      {
        isLoggedIn && isSpaceReady && thread.isReady
        ? props.children
        : null
      }
  
    </>
)}

AccessThread.defaultProps = {
  componentLogin: <Login />,

  componentIsLoggedOut: <A.Span pointer tag='white'>Login <A.Span opacity={.6} pl={1} ><A.LoadingSquare /></A.Span></A.Span>,
  componentIsLoading: <A.Span pointer tag='white'>Login <A.Span pl={1}><A.LoadingSquare className='active' /></A.Span></A.Span>,
  componentIsLoggedIn: <A.Span pointer tag='blue'>Active</A.Span>,
  
  loginAuto: false,
  spaceAuto: false,
  threadAuto: false,
  isLoginDisabled: false,
  
}

AccessThread.propTypes = {
  space: PropTypes.string,
}

export default props =>
<BoxContext>
  { box => ( <AccessThread box={box} {...props} /> )}
</BoxContext>