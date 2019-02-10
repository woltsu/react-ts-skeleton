import { ExampleActions, ExampleTypes } from '../actions/exampleActions'

export interface IExampleState {
  value: string
}

export const initialState: IExampleState = {
  value: 'Hello!'
}

export default (state: IExampleState = initialState, action: ExampleActions): IExampleState => {
  switch (action.type) {
    case ExampleTypes.FETCH_VALUE_SUCCESSFUL: return ({
      ...state,
      value: action.payload
    })

    default: return state
  }
}
