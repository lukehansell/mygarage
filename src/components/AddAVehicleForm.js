import React from 'react'

import { FormControl, InputLabel, Input, Typography } from '@material-ui/core/'
export default ({
  handleMakeChange = () => {},
  handleModelChange = () => {},
  handleRegChange = () => {},
  make = '',
  model = '',
  reg = '',
  style = {}
}) => (
  <div style={style}>
    <Typography variant="headline">Add a Vehicle</Typography>
    <FormControl fullWidth={true} margin="normal">
      <InputLabel htmlFor="make">Make</InputLabel>
      <Input id="make" onChange={handleMakeChange} fullWidth={true} />
    </FormControl>
    <FormControl fullWidth={true} margin="normal">
      <InputLabel htmlFor="model">Model</InputLabel>
      <Input id="model" onChange={handleModelChange} fullWidth={true} />
    </FormControl>
    <FormControl fullWidth={true} margin="normal">
      <InputLabel htmlFor="reg">Reg</InputLabel>
      <Input id="model" onChange={handleRegChange} fullWidth={true} />
    </FormControl>
  </div>
)
