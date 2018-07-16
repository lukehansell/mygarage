export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_VEHICLE': {
      const { make, model, reg, mileage } = action

      return [
        ...state,
        {
          make,
          model,
          reg,
          mileage
        }
      ]
    }

    case 'REMOVE_VEHICLE': {
      const { reg } = action
      return state.filter(vehicle => vehicle.reg !== reg)
    }

    case 'UPDATE_MILEAGE': {
      const { reg, mileage } = action
      return state.map(vehicle => {
        if (vehicle.reg !== reg) return vehicle

        return {
          ...vehicle,
          mileage
        }
      })
    }

    default:
      return state
  }
}
