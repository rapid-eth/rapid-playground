/** @jsx jsx */
import { jsx } from 'theme-ui'
import {
  useFontSizeEffect,
  useFontWeightEffect,
  useTagEffect
} from '../effects'

export default ({ as, sx, children, ...props }) => {
  const size = useFontSizeEffect(props)
  const weight = useFontWeightEffect(props)
  const tag = useTagEffect(props)


  return (
    <span
      sx={{
        display: 'inline-block',
        fontSize: size,
        fontWeight: weight,
        zIndex: 10,
        ...sx,
        ...props,
        ...tag,
      }}
      children={children}
    />
  )
}