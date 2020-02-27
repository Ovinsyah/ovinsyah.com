import React from 'react';
import { SectionServices, Grids, Grid } from './style';

const services = [
  {
    title: "Design UI/UX",
    title_tool: "Designt Tool",
    title_services: "Scoope",
    services: ["UX", "UI", "Web", "Mobile"],
    tools: ["Figma, Adobe XD, draw.io, Notion"]
  },
  {
    title: "Front End Developer",
    title_tool: "Dev Tool",
    title_services: "library",
    services: ["jQuery", "Angularjs", "Angular", "Vue", "React"],
    tools: ["VSCode, Github, Gitlab, Bitbucket, Terminal"]
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
                    <div>{item.title_services}</div>
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
