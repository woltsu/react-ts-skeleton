import { put } from 'redux-saga/effects'
import { fetchValueSuccessful } from '../../actions/exampleActions'
import { fetchValueSaga } from '../../sagas/exampleSaga'

describe('exampleSaga', () => {
  test('fetchValueSaga', () => {
    const gen = fetchValueSaga()
    expect(gen.next().value).toEqual(put(fetchValueSuccessful('')))
  })
})
