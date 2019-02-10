import { all, put, takeLatest } from 'redux-saga/effects'
import {
  ExampleTypes,
  fetchValueSuccessful
} from '../actions/exampleActions'

export default function* exampleSaga(): Generator {
  yield all([
    takeLatest(ExampleTypes.FETCH_VALUE, fetchValueSaga)
  ])
}

export function* fetchValueSaga(): Generator {
  yield put(fetchValueSuccessful(Math.random().toString(36).substring(7)))
}
