/* --- Global Dependencies --- */
import React, { useEffect, useState } from 'react'
import { Span } from '@horizin/design-system-atoms'
import { BoxInject } from '3box-react-state'
import { useThreadJoinEffect } from './effects'
import uuid from 'uuid'
/* --- React Component --- */
const ThreadJoin = ({ box, isMenuAvailable, styled, ...props }) => {
  const [id, setID] = useState(uuid())
  const [request, setRequest] = useState(false)
  const thread = useThreadJoinEffect(box, {
    requestJoin: request,
    ...props
  })

  /* --- Effects --- */
  return (
    <>
      {
        !thread.isDispatched && !thread.isReady &&
        <A.Span onClick={() => setRequest(true)}>
          {props.componentIsDisconnected}
        </A.Span>
      }
      {
        thread.isDispatched && !thread.isReady &&
        <A.Span>
          {props.componentIsConnecting}
        </A.Span>
      }
      {
        thread.isReady &&
        <A.Span onClick={() => setRequest(true)} >
          {props.componentIsConnected}
        </A.Span>
      }
    </>
  )
}

ThreadJoin.defaultProps = {
  componentIsDisconnected: <Span pointer xxs tag='white'>Join <A.Span opacity={.6} pl={1} ><A.LoadingSquare /></A.Span></Span>,
  componentIsConnecting: <Span pointer xxs tag='white'>Joining <A.Span pl={1}><A.LoadingSquare className='active' /></A.Span></Span>,
  componentIsConnected: <Span pointer xxs tag='blue'>thread</Span>,
}

ThreadJoin.propTypes = {
  spaceAuto: PropTypes.bool
}

export default props =>
  <BoxInject>
    <ThreadJoin {...props} />
  </BoxInject>