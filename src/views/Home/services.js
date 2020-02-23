import React from 'react';
import { SectionServices, Grids, Grid } from './style';

const services = [
  {
    title: "Design UI/UX"
  },
  {
    title: "Front End Developer"
  }
]

export default () => {
  return (
    <SectionServices>
      <div className="container">
        <Grids>
          {
            services.map((item, key) => {
              return(
                <Grid key={key}>
                  <div className="ini align center">
                    <h2>{item.title}</h2>
                  </div>
                </Grid>
              )
            })
          }
        </Grids>
      </div>
    </SectionServices>
  )
}
