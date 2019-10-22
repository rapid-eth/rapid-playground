/**
 * @function useSetEffect
 * @description Set Data
 * @param {Object} state
 * @param {Object} dispatch
 */

/* --- Global --- */
import { useState, useEffect } from "react";

/* --- Component --- */
const useSetEffect = (state, dispatch) => {
  const [dispatched, setDispatched] = useState()

  useEffect(() => {
    if (state.store.sets.length > 0) {
      const selected = state.store.sets[0]

      switch (selected.type) {
        case 'SET_REQUEST':


          if (selected) {
            const runEffect = async () => {
              let listUpdated
              const { access, key, keys, inputs, space, append, override } = selected
              try {
                if (space) {
                  if (append) {
                    const data = await state.spaces[space].instance[access].get(append)
                    if (data) {
                      /**
                       * IF : key
                       * TRUE : Update object 
                       * FALSE : Update array 
                       */
                      if (key) {
                        listUpdated = {
                          ...data,
                          [key]: inputs
                        }
                      } else {
                        listUpdated = Array.isArray(data) ? [...data, inputs] : [data, inputs]
                      }
                    } else {
                      if (key) {
                        listUpdated = { [key]: inputs }
                      } else {
                        listUpdated = [inputs]
                      }
                    }
                    const list = await state.spaces[space].instance[access].set(append, listUpdated)
                    dispatch({
                      type: "SET_SUCCESS",
                      payload: list
                    })
                    if (selected.update) {
                      dispatch({
                        type: "GET_REQUEST",
                        access,
                        key: selected.update,
                        space,
                      })
                    }
                  } else {
                    await state.spaces[space].instance[access].setMultiple(keys, inputs)
                    dispatch({
                      type: "SET_SUCCESS",
                    })
                    if (selected.update) {
                      dispatch({
                        type: "GET_REQUEST",
                        access,
                        key: selected.update,
                        space,
                      })
                    }
                  }

                } else {
                  if (append) {
                    const data = await state.instance[access].get(append)
                    if (data) {
                      listUpdated = Array.isArray(data) ? [...data, inputs] : [data, inputs]
                    } else {
                      listUpdated = [inputs]
                    }
                    Array.isArray(data)
                      ? await state.instance[access].set(append, listUpdated)
                      : !override // todo set system for overriding data... add to backup space? 
                        ? await state.instance[access].set(append, listUpdated)
                        : null

                  } else {
                    await state.auth.instance[access].setMultiple(keys, inputs)
                  }
                }
              } catch (error) {
                console.log(error)
                dispatch({
                  type: "SET_FAILURE",
                })
              }


            }
            runEffect();
          }


          break;
        case 'SET_INSERT_REQUEST':
          let data, branch, branchIndex
          try {
            if (selected.key)
              data = dot.merge(state.profile[selected.index], `${selected.key}`, selected.input)
            else
              data = dot.merge(state.profile, `${selected.index}`, selected.input)[selected.index]

            state.instance[selected.access].set(selected.index, data)
            dispatch({
              type: "SET_INSERT_SUCCESS",
              index: selected.index,
              key: selected.key,
              payload: data
            })
            setDispatched(true)

          } catch (error) {
            console.log(error, 'insert failure')
            dispatch({
              type: "SET_INSERT_FAILURE",
              payload: error
            })
          }
          break;

        case 'SET_MULTIPLE_REQUEST':
          state.instance[selected.access].setMultiple(selected.keys, selected.inputs)

          break;

        default:
          break;
      }
    }
  }, [state.store.sets])

  return dispatched
}

/* --- Export --- */
export default useSetEffect