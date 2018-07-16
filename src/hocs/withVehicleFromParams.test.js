import React from 'react'

import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import configureStore from 'redux-mock-store'

import withVehicleFromParams from './withVehicleFromParams'

configure({ adapter: new Adapter() })

const buildStore = (vehicles = []) => {
  const mockStore = configureStore()
  const initialState = {
    vehicles
  }
  return mockStore(initialState)
}

const renderWrappedComponent = (store, params) => {
  const WrappedComponent = withVehicleFromParams(() => <div />)
  return shallow(<WrappedComponent store={store} {...params} />)
}

describe('when no matching vehicle is available', () => {
  let result, props

  beforeEach(() => {
    const store = buildStore()
    result = renderWrappedComponent(store, {
      match: { params: { reg: 'foo' } }
    })
    props = result.props()
  })

  it('passes "Vehicle not found" as errorMessage prop', () =>
    expect(props.errorMessage).toBe('Vehicle not found.'))

  it('passes true as error prop', () => expect(props.error).toBe(true))

  it('passes "-" as the make', () => expect(props.make).toBe('-'))

  it('passes "-" as the model', () => expect(props.model).toBe('-'))

  it('passes "-" as the reg', () => expect(props.reg).toBe('-'))

  it('passes 0 as the mileage', () => expect(props.mileage).toBe(0))
})

describe('when a matching vehicle is available', () => {
  let result, props
  const vehicle = {
    make: 'Make',
    model: 'Model',
    reg: 'Registration',
    mileage: 80000
  }

  beforeEach(() => {
    const store = buildStore([vehicle])

    result = renderWrappedComponent(store, {
      match: { params: { reg: 'Registration' } }
    })
    props = result.props()
  })

  it('passes "" as errorMessage prop', () =>
    expect(props.errorMessage).toBe(''))

  it('passes false as error prop', () => expect(props.error).toBe(false))

  it('passes the make as make', () => expect(props.make).toBe(vehicle.make))

  it('passes the model as model', () => expect(props.model).toBe(vehicle.model))

  it('passes the reg as reg', () => expect(props.reg).toBe(vehicle.reg))

  it('passes the mileage as mileage', () =>
    expect(props.mileage).toBe(vehicle.mileage))
})
