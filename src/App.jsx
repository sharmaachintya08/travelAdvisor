import React, { useEffect,useState } from "react";
import Navbar from './components/header/Navbar';
import Grid from "@mui/material/Grid";
import Map from './components/map/Map';
import List from './components/list/List';
import Restaurants from './components/api/Restaurants';

const App = () => {


    const [bounds,setBounds] = useState(null);
    const [coordinates,setCoordinates] = useState({});


    console.log(bounds);

    useEffect(()=>{
    navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
      setCoordinates({ lat: latitude, lng: longitude });
      });
    },[]);
    useEffect(()=>{
        Restaurants().then((data)=>{
            console.log(data);
        })
    },[]);

    return(
      <React.Fragment>
        <Navbar />
        <Grid container>
          <Grid item xs={12} md={8} sm={6}>
            <Map coordinates={coordinates} setCoordinates={setCoordinates} setBounds={setBounds}/>
          </Grid>
          <Grid item xs={12} md={4} sm={6}>
            <List />
          </Grid>
        </Grid>
      </React.Fragment>
    );
}
export default App;