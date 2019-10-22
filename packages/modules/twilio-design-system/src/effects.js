/* eslint-disable react-hooks/exhaustive-deps */
import { DateTime } from 'luxon'
import { useContext, useState, useEffect } from 'react'

/**
 * @function useTimestampConvertEffect
 * @description Manage epoch times
 * @param {*} props
 */
export const useTimestampConvertEffect = (props) => {
  const [ timeFormatted, setTimeFormated ] = useState()
  
  useEffect( () => {
    if(props.timestamp) {
      let time = DateTime
      .fromMillis(props.timestamp * 1000)
      .toLocaleString({
        month: 'short',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit' 
      })
      setTimeFormated(time)
    }
  }, [props.timestamp])

return timeFormatted

}
