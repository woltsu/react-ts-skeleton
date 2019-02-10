import React, { FunctionComponent, useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchValue } from '../actions/exampleActions'
import { IActionCreator, IState } from '../interfaces'

interface IAppProps {
  value: string,
  fetchValue: IActionCreator
}

const App: FunctionComponent<IAppProps> = ({ value, fetchValue }) => {
  // This can be used to test sentry
  const throwError = () => {
    throw Error('Error! :((')
  }
  useEffect(() => {
    fetchValue()
  }, [])
  return (
    <div>
      <p className='value'>Value: { value }</p>
      <button onClick={ fetchValue }>fetch value</button>
      <button onClick={ throwError }>throw error</button>
    </div>
  )
}

const mapStateToProps = (state: IState) => ({
  value: state.example.value
})

const mapDispatchToProps = {
  fetchValue
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
