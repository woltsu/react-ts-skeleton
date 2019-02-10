import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction'
import { createLogger } from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import reducers from './reducers'
import sagas from './sagas'

const sagaMiddleware = createSagaMiddleware()

const combinedReducers = combineReducers({
  ...reducers
})

const middleware: any[] = [
  sagaMiddleware
]

if (process.env.NODE_ENV === 'development') {
  const logger = createLogger({
    collapsed: true
  })
  middleware.push(logger)
}

const composeEnhancers = composeWithDevTools({})

const store = createStore(
  combinedReducers,
  composeEnhancers(
    applyMiddleware(...middleware)
  )
)

sagaMiddleware.run(sagas)

export default store
