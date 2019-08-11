import styled from 'styled-components'

import Box from './Box'

const Image = styled(Box)`
  display: block;
  height: auto;
  max-width: 100%;
`

Image.defaultProps = {
  as: 'img'
}

Image.displayName = 'Image'
export default Image
