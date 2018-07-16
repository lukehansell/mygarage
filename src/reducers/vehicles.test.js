import reducer from './vehicles'

describe('when state is not yet defined', () => {
  it('defaults to a blank array', () =>
    expect(reducer(undefined, {})).toEqual([]))
})

describe('when action does not match', () => {
  it('returns the state', () => expect(reducer([], {})).toEqual([]))
})

describe('when action is of type ADD_VEHICLE', () => {
  const vehicleInState = {
    reg: 'foo',
    model: 'model',
    make: 'make',
    mileage: 123
  }

  const action = {
    type: 'ADD_VEHICLE',
    reg: 'bar',
    model: 'otherModel',
    make: 'otherMake',
    mileage: 321
  }

  const { type, ...vehicle2Details } = action

  const defaultState = [vehicleInState]

  const expectedState = [vehicleInState, vehicle2Details]

  it('appends the vehicle to the state', () =>
    expect(reducer(defaultState, action)).toEqual(expectedState))
})

describe('when action is of type REMOVE_VEHICLE', () => {
  const action = {
    type: 'REMOVE_VEHICLE',
    reg: 'foo'
  }

  const defaultState = [
    {
      reg: 'foo'
    },
    {
      reg: 'bar'
    }
  ]
  const expectedState = [
    {
      reg: 'bar'
    }
  ]

  it('removes the vehicle from the state', () =>
    expect(reducer(defaultState, action)).toEqual(expectedState))
})

describe('when action is of type UPDATE_MILEAGE', () => {
  const action = {
    type: 'UPDATE_MILEAGE',
    reg: 'foo',
    mileage: 999
  }

  const defaultState = [
    {
      reg: 'foo',
      mileage: 0
    },
    {
      reg: 'bar',
      mileage: 0
    }
  ]

  const expectedState = [
    {
      reg: 'foo',
      mileage: 999
    },
    {
      reg: 'bar',
      mileage: 0
    }
  ]

  it('updates the appointed vehicles mileage', () =>
    expect(reducer(defaultState, action)).toEqual(expectedState))
})
