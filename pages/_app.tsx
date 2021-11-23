import { ReactElement } from 'react'
import '../styles/tailwind.css'

type AppProps = {
  Component: any
  pageProps: any
}

function App({ Component, pageProps }: AppProps): ReactElement {
  return <Component {...pageProps} />
}

export default App
