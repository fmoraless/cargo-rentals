"use client";
import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import classes from "./Map.module.css";
import { Container } from "@mantine/core";

const Map = () => {
  return (
    <Container className={classes.container}>
      <MapContainer
        className={classes.mapContainer}
        center={[-38.73965, -72.59842]}
        zoom={14}
        scrollWheelZoom={false}
        style={{ height: "300px" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </Container>
  );
};

export default Map;
