import React from 'react';
import { SectionHeader, Grids, Grid } from './style';

export default () => {
  return (
    <SectionHeader className="container">
      <Grids>
        <Grid className="caption">
          <div>
            <h2>OVINSYAH AL BAYHAQY</h2>
            <h1>UI/UX ENGINER</h1>
            <h3>I created a beautiful design for your application.</h3>
          </div>
        </Grid>
        <Grid className="image-state"><img src="/state-web.svg" alt=""/></Grid>
      </Grids>
    </SectionHeader>
  )
}
