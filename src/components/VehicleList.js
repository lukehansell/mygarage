import React from 'react'
import { List, ListItem, ListItemText } from '@material-ui/core/'
import VehicleListItem from './VehicleListItem'

const buildVehicleItems = vehicles =>
  vehicles.map(vehicle => <VehicleListItem {...vehicle} key={vehicle.reg} />)

const buildNoVehicleItems = () => (
  <ListItem>
    <ListItemText>No vehicles added</ListItemText>
  </ListItem>
)

export default ({ vehicles = [] }) => {
  const children =
    vehicles.length > 0 ? buildVehicleItems(vehicles) : buildNoVehicleItems()

  return <List>{children}</List>
}
