import React from 'react'
import { ListItem, ListItemText } from '@material-ui/core/'
import { Link } from 'react-router-dom'

export default ({ make, model, reg }) => (
  <ListItem>
    <ListItemText>
      <Link to={`/vehicles/details/${reg}`}>
        {make} {model} - {reg}
      </Link>
    </ListItemText>
  </ListItem>
)
