import { init as sentryInit } from '@sentry/browser'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './components/App'
import './index.css'
import store from './store'

if (process.env.NODE_ENV === 'production') {
  sentryInit({
    dsn: process.env.REACT_APP_SENTRY_DSN
  })
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
