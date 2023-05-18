import { createGlobalStyle } from 'styled-components'
import styledNormalize from 'styled-normalize'

const GlobalStyles = createGlobalStyle`
  ${ styledNormalize }
  * {
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
  }

  html {
    font-size: 10px;
  }

  body {
    font-family: sans-serif;
  }
`

export default GlobalStyles
