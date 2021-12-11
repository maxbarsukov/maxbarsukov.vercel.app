import React from 'react'
import Head from 'next/head'
import type { AppProps } from 'next/app'
import { CacheProvider, EmotionCache } from '@emotion/react'

import createEmotionCache from 'src/styles/createEmotionCache'
import App from 'src/components/App'
import * as sw from 'src/lib/serviceWorker'
import serviceWorkerConfig from 'src/config/serviceWorkerConfig'

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

export interface DocumentAppProps {
  Component: React.FC
  emotionCache: EmotionCache
  pageProps: Record<string, unknown>
}

const DocumentApp = (props: DocumentAppProps) => {
  const { emotionCache = clientSideEmotionCache } = props

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      // Try to register the SW when client side is loaded
      sw.register(serviceWorkerConfig)
    }
  }, [])

  return (
    <>
      <Head>
        <title>Max Barsukov</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=0"
        />
      </Head>
      <CacheProvider value={emotionCache}>
        {/* @ts-ignore */}
        <App {...props} />
      </CacheProvider>
    </>
  )
}


export default DocumentApp
