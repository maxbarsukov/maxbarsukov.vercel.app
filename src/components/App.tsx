import React from 'react'
import { Global } from '@emotion/react'
import { ChakraProvider } from '@chakra-ui/react'

import type { DocumentAppProps } from 'pages/_app'

const App: React.FC<DocumentAppProps> = ({ Component, pageProps }) => {
  const globalStyles = React.useMemo(
    () => ({
      '*, *::after, *::before': {
        margin: 0,
        padding: 0,
        boxSizing: 'borderBox',
        fontFamily: ['Roboto', 'sans-serif'],
      },
      body: {
        overflowX: 'hidden',
        margin: 0,
        fontFamily: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen',
          'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', 'sans-serif'],
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale',
      }
    }), []
  )

  return (
    <ChakraProvider>
      { /* @ts-ignore */ }
      <Global styles={globalStyles} />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default App
