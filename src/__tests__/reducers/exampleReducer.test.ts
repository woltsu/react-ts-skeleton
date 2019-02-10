import { ExampleTypes } from '../../actions/exampleActions'
import example, { initialState } from '../../reducers/example'

describe('exampleReducer', () => {
  it('should handle ExampleTypes.FETCH_VALUE_SUCCESSFUL', () => {
    expect(
      example(
        initialState,
        { type: ExampleTypes.FETCH_VALUE_SUCCESSFUL, payload: '123' }
      )
    ).toEqual({
      ...initialState,
      value: '123'
    })
  })
})
