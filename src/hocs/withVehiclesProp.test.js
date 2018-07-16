import React from 'react'

import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import configureStore from 'redux-mock-store'

import withVehiclesProp from './withVehiclesProp'

configure({ adapter: new Adapter() })

const buildStore = vehicles => {
  const mockStore = configureStore()
  const initialState = {
    vehicles
  }
  return mockStore(initialState)
}

const renderWrappedComponent = (store, params) => {
  const WrappedComponent = withVehiclesProp(() => <div />)
  return shallow(<WrappedComponent store={store} {...params} />)
}

describe('when vehicles are available in the store', () => {
  let result, props
  const vehicles = [1, 2, 3]

  beforeEach(() => {
    const store = buildStore(vehicles)
    result = renderWrappedComponent(store)
    props = result.props()
  })

  it('passes the vehicles as vehicles prop', () =>
    expect(props.vehicles.length).toBe(3))
})

describe('when no vehicles are available in the store', () => {
  let result, props

  beforeEach(() => {
    const store = buildStore()
    result = renderWrappedComponent(store)
    props = result.props()
  })

  it('defaults vehicles to a blank array', () =>
    expect(props.vehicles.length).toBe(0))
})
