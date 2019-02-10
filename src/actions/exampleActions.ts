export enum ExampleTypes {
  FETCH_VALUE = 'Fetch value',
  FETCH_VALUE_SUCCESSFUL = 'Fetch value successful',
}

interface IFetchValue { type: ExampleTypes.FETCH_VALUE }

export const fetchValue = (): IFetchValue => ({
  type: ExampleTypes.FETCH_VALUE
})

interface IFetchValueSuccessful {
  type: ExampleTypes.FETCH_VALUE_SUCCESSFUL,
  payload: string
}

export const fetchValueSuccessful = (value: string): IFetchValueSuccessful => ({
  type: ExampleTypes.FETCH_VALUE_SUCCESSFUL,
  payload: value
})

export type ExampleActions =
  IFetchValue |
  IFetchValueSuccessful
