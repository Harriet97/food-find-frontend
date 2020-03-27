import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import React, { Component } from "react";

export class GoogleMap extends Component {
  render() {
    const mapStyles = {
      width: "100%",
      height: "100%"
    };

    return (
      <Map
        google={this.props.google}
        zoom={16}
        style={mapStyles}
        initialCenter={{
          lat: this.props.restaurant.location.latitude,
          lng: this.props.restaurant.location.longitude
        }}
      >
        <Marker
        name={this.props.restaurant.name}
          position={{
            lat: this.props.restaurant.location.latitude,
            lng: this.props.restaurant.location.longitude
          }}
        />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_API_KEY
})(GoogleMap);
