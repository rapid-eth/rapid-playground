/* eslint-disable react-hooks/exhaustive-deps */
/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useLocationEffect } from '../effects'

export default ({ as, sx, children, ...props}) => {
  const location = useLocationEffect(props)
  return (
    <div
      sx={{
        position: 'fixed',
        ...location,
        ...sx,
        ...props
      }}
      children={children}
    />
  )
}