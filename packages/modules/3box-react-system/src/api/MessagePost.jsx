/**
 * @function MessagePost
 * @description Delete items from personal space.
 * @var threadName
 * @var post
 * @var data
 * @var isPostAuto
 */
/* --- Global --- */
import dot from 'dot-prop-immutable-chain'
import React, { useEffect, useState } from 'react';
import { BoxInject } from '3box-react-state'
import BoxAccess from '../components/BoxAccess';

const MessagePost = ({ box, ...props }) => {
  /* --- State --- */
  const [ isThreadReady, setIsThreadReady ] = useState(false)
  const [ isRequested, setIsRequested ] = useState(false)
  
  /* --- Handlers --- */
  const postRequestHandler = () => setIsRequested(true)
  
  /* --- Effects --- */

  /**
   * @function isThreadReadyUseEffect
   * @description Check if 3Box Thread is ready.
   */
  useEffect( () => { 
    const select = dot(box).get(`auth.threads.${props.threadName}.instance`).value()
    if(select)
      setIsThreadReady(true)
  }, [box.auth.threads])

  /**
   * @function threadPostRequestEffect
   * @description Handle User Input Request
   */
  useEffect(() => {
    if (
      (
        isRequested || props.isPostAuto) && // Wait for dispatch request.
        props.threadName && props.post // Minimal Thread Post Requirements
      ) {
        // 3box.js : ThreadPost (https://docs.3box.io/api/messaging#box-space-thread-post-message)
        // 3box-state : threadPost (github.com/kamescg/3box-state)
        box.threadPost({ 
          space: props.space,
          threadName: props.threadName, // auth.threads[threadName]
          post: props.post // auth.threads[threadName].instance.post(post)
        })
    }
  }, [isRequested, props.data])

  /* --- Init Effects --- */
  // isThreadReadyUseEffect()
  // threadPostRequestEffect()
  
  
  /* --- Component --- */
  const styled = isThreadReady ? props.styled : props.styledLoading
  return (
  props.children
  ? <A.Span onClick={postRequestHandler}>
      {props.children}
    </A.Span>
  : isThreadReady
    ? (
      <A.Span
        {...props.styled}
        onClick={postRequestHandler}>
        {props.isReadyComponent}
      </A.Span>
      )
    : (
      <A.Toast
        content={(
          <PostAttemptMessage 
            threadName={props.threadName} 
          />)}
        >
        <A.Flex alignCenter>
          <A.Span {...props.styled} >
            {props.isLoadingComponent}
          </A.Span>
        </A.Flex>
      </A.Toast>
      )
)}

const PostAttemptMessage = props =>
<A.Flex column>
  <A.Span xs mb={3}>Open Thread to Complete Action</A.Span>
  <BoxAccess
    spaceAuto threadAuto
    level='thread'
    space={SPACE}
    threadName={props.threadName}
    optionsThread={{
      members: true
    }}
  />
</A.Flex>

MessagePost.defaultProps = {
  isReadyComponent: <A.Span xxs tag='green' >Post</A.Span>,
  isLoadingComponent: <A.Span xxs tag='white' opacity={.7}>Post</A.Span>,
  label: 'Post',
  spaceAuto: true,
  styledLoading: {
    xs: true,
    variant: 'white'
  },
  styled: {
    xs: true,
    variant: 'red'
  },
  styledButton: {
    xs: true,
    variant: 'white'
  },
}

MessagePost.propTypes = {
  spaceAuto: PropTypes.bool
}


export default props =><BoxInject><MessagePost {...props} /></BoxInject>
