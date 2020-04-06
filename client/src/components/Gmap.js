import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

function Gmap(props) {
  const mapStyles = {
    width: '100%',
    height: '100%'
  };

  return (
    <>
      <div>hello world</div>
      <Map
        google={props.google}
        zoom={8}
        style={mapStyles}
        initialCenter={{ lat: 41.881832, lng: -87.623177 }}
      />
    </>
  );
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDs-5UsSMEKR4CDoV2hB07KG_xWez1uV9Q'
})(Gmap);
