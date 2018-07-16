import { connect } from 'react-redux'

export default WrappedComponent => {
  const mapStateToProps = ({ vehicles = [] }) => ({
    vehicles
  })

  const mapDispatchToProps = dispatch => ({})

  return connect(mapStateToProps, mapDispatchToProps)(WrappedComponent)
}
