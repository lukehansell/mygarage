import { connect } from 'react-redux'

const buildVehicleError = vehicle => ({
  error: !vehicle,
  errorMessage: !vehicle ? 'Vehicle not found.' : ''
})

const buildVehicleObject = ({
  make = '-',
  model = '-',
  reg = '-',
  mileage = 0
} = {}) => ({
  make,
  model,
  reg,
  mileage
})

export default WrappedComponent => {
  const mapStateToProps = ({ vehicles = [] }, props) => {
    const paramReg = props.match.params.reg

    const vehicle = vehicles.find(vehicle => vehicle.reg === paramReg)

    return {
      ...buildVehicleObject(vehicle),
      ...buildVehicleError(vehicle)
    }
  }

  const mapDispatchToProps = dispatch => ({})

  return connect(mapStateToProps, mapDispatchToProps)(WrappedComponent)
}
