import React from 'react'

import { Typography } from '@material-ui/core'

export default ({ make, model, reg, mileage }) => (
  <div>
    <Typography variant="headline">Vehicle Details</Typography>

    <div>
      <dl>
        <dt>Make</dt>
        <dd>{make}</dd>
        <dt>Model</dt>
        <dd>{model}</dd>
        <dt>Reg</dt>
        <dd>{reg}</dd>
        <dt>Mileage</dt>
        <dd>{mileage} miles</dd>
      </dl>
    </div>
  </div>
)
