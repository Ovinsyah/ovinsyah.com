import { SectionHeader, Grids, Grid, Touch, SectionButton } from './/home.style';

export default () => {
  return (
    <SectionHeader className="container">
      <Grids>
        <Grid className="caption">
          <div>
            <h2>OVINSYAH AL BAYHAQY</h2>
            <h1>SOFTWARE ENGINEER</h1>
            <h3>Designed an elegant and user-friendly interface for your application, enhancing both aesthetics and usability</h3>
            <SectionButton>
              <Touch black={false} href="mailto:hi.ovinsyah@gmail.com">Touch Me</Touch>
              <Touch black={true} href="http://ini-design.ovinsyah.com/" target="_blank">Ini Design (React)</Touch>
              <Touch black={true} href="http://senduh.id/" target="_blank">Senduh (Web Invitation)</Touch>
              <Touch black={true} href="https://ticka.selisih.id/" target="_blank">Ticka (SDLC TOOLS)</Touch>
            </SectionButton>
          </div>
        </Grid>
        <Grid className="image-state"><img src="/state-web.svg" alt="state-mockup" /></Grid>
      </Grids>
    </SectionHeader>
  )
}