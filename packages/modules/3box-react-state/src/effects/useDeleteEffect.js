/**
 * @function useDeleteEffect
 * @description Delete Thread Post
 * @param {Object} state
 * @param {Object} dispatch
 */

/* --- Global --- */
import { useState, useEffect } from "react";

/* --- Component --- */
const useDeleteEffect = (state, dispatch) => {
  const [dispatched, setDispatched] = useState()

  useEffect(() => {
    if (state.store && state.store.threadsGet) {
      const selected = state.store.threadsGet[0]
      if (selected) {
        const runEffect = async () => {
          const { space, threadName, firstModerator, members, options } = selected
          try {
            let read
            read = await state.static.getThread(space, threadName, firstModerator, members, options)
            dispatch({
              type: 'GET_THREAD_SUCCESS',
              space,
              threadName,
              firstModerator,
              payload: read
            })
            setDispatched(true)
          } catch (error) {
            dispatch({
              type: 'GET_THREAD_FAILURE',
              space,
              threadName,
              payload: error
            })
            setDispatched(false)
          }
        }
        runEffect();
      }
    }
  }, [state.store.threadsGet])

  return dispatched
}

/* --- Export --- */
export default useDeleteEffect