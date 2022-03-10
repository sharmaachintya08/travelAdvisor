import React from 'react';
import GoogleMapReact from 'google-map-react';

const Map = ({coordinates,setCoordinates,setBounds}) => {
    console.log('map: ',coordinates);

    return (
      <div style={{ height: "90vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyAsN1F5CXRuS74oK1BY68_gGlWjkRPIvy0" }}
          defaultCenter={coordinates}
          center={coordinates}
          defaultZoom={8}
          onChange={(e)=>{
              setCoordinates({lat:e.center.lat,lng:e.center.lng})
              setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw })
          }}
        >
          
        </GoogleMapReact>
      </div>
    );
}
export default Map;