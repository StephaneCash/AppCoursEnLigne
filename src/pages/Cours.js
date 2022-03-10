import { Grid } from '@mui/material'
import React from 'react'
import NavBar from '../composants/NavBar'
import Sidebar from '../composants/Sidebar'

function Cours() {
  return (
    <div>
      <div className="dashboard">
        <NavBar />
        <Grid container item={true}>
          <Grid sm={2} xs={2} item={true}>
            <Sidebar />
          </Grid>
          <Grid sm={10} xs={10} item={true} style={{ marginTop: "80px", padding: "10px", backgroundColor: "#efefef" }}>
            <Grid sm={12} xs={12} item={true}>
              <div className="container-fluid movie-app" style={{ backgroundColor: "#fff" }}>
                
               Cours
              </div>
            </Grid>
          </Grid>
        </Grid >
      </div >
    </div>
  )
}

export default Cours