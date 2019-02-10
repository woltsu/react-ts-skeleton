import React, { FunctionComponent, useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchValue } from '../actions/exampleActions'
import { IState } from '../interfaces'

interface IAppProps {
  value: string,
  fetchValue: () => void
}

const App: FunctionComponent<IAppProps> = ({ value, fetchValue }) => {
  useEffect(() => {
    fetchValue()
  }, [])
  return (
    <div>
      <p className='value'>Value: { value }</p>
      <button onClick={ fetchValue }>fetch value</button>
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
