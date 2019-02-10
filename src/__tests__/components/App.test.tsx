import { mount, ReactWrapper } from 'enzyme'
import React from 'react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import App from '../../components/App'

describe('<App />', () => {
  let app: ReactWrapper

  beforeEach(() => {
    const mockStore = configureStore()
    const state = { example: { value: '123' } }
    const store = mockStore(state)
    app = mount(
      <Provider store={store}>
        <App />
      </Provider>
    )
  })

  it('renders', () => {
    expect(app.find('.value').text()).toBe('Value: 123')
  })
})
