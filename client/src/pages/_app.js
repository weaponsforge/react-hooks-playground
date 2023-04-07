import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { store } from '@/store/store'

import '@/styles/globals.css'

function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

App.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.object
}

export default App
