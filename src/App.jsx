import React from "react";
import Navbar from './components/header/Navbar';
import Grid from "@mui/material/Grid";
import Map from './components/map/Map';
const App = () => {
    return (
      <React.Fragment>
        <Navbar />
        <Grid container>
          <Grid item xs={12} md={8} sm={6}>
            <Map />
          </Grid>
          <Grid item xs={12} md={4} sm={6}>
            
          </Grid>
        </Grid>
      </React.Fragment>
    );
}
export default App;