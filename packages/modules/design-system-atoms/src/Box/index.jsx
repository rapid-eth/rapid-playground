/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'

import {
  useGradientEffect,
  useFontSizeEffect,
} from '../effects'

const Box = ({ as, sx, children, ...props }) => {
  const gradient = useGradientEffect(props)
  const size = useFontSizeEffect(props)

  return (
    <Styled
      as={as || 'div'}
      sx={{
        backgroundImage: gradient,
        fontSize: size,
        position: 'relative',
        zIndex: 10,
        ...sx,
      }}
    >
      {children}
    </Styled>
  )
}

export default Box