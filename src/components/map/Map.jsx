import React from 'react';
import GoogleMapReact from 'google-map-react';

const Map = () => {
    return (
      <div style={{ height: "90vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyAsN1F5CXRuS74oK1BY68_gGlWjkRPIvy0" }}
          defaultCenter={{ lat: 0, lng: 0 }}
          defaultZoom={8}
        >
          
        </GoogleMapReact>
      </div>
    );
}
export default Map;