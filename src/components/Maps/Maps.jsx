import React from "react";
import "./Maps.css";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Maps = ({ user }) => {
  const location = [
    user?.address?.coordinates?.lat,
    user?.address?.coordinates?.lng,
  ];
  const zoom = 12;

  return (
    <div className="mapbox">
      <Map center={location} zoom={zoom}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
        />
        <Marker position={location}>
          <Popup>
            {user.firstName}&nbsp;{user.lastName} <br /> location
          </Popup>
        </Marker>
      </Map>
    </div>
  );
};

export default Maps;
