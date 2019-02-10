import configureStore from 'redux-mock-store'
import {
  ExampleTypes,
  fetchValue,
  fetchValueSuccessful
} from '../../actions/exampleActions'

describe('exampleActions', () => {
  const mockStore = configureStore()
  const store = mockStore()

  beforeEach(() => {
    store.clearActions()
  })

  test('fetchValue', () => {
    const expectedActions = [
      {
        type: ExampleTypes.FETCH_VALUE
      }
    ]
    store.dispatch(fetchValue())
    expect(store.getActions()).toEqual(expectedActions)
  })

  test('fetchValueSuccessful', () => {
    const expectedActions = [
      {
        type: ExampleTypes.FETCH_VALUE_SUCCESSFUL,
        payload: '123'
      }
    ]
    store.dispatch(fetchValueSuccessful('123'))
    expect(store.getActions()).toEqual(expectedActions)
  })
})
