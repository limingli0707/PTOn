import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker
} from "react-simple-maps";
import Card from "@material-ui/core/Card";
import CardHeader from '@material-ui/core/CardHeader';

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const markers = [
  {
    markerOffset: -30,
    name: "Buenos Aires",
    coordinates: [-58.3816, -34.6037]
  },
  { markerOffset: 15, name: "La Paz (15)", coordinates: [-68.1193, -16.4897] },
  { markerOffset: 15, name: "Brasilia (27)", coordinates: [-47.8825, -15.7942] },
  { markerOffset: 15, name: "Santiago (312)", coordinates: [-70.6693, -33.4489] },
  { markerOffset: 15, name: "Bogota (4)", coordinates: [-74.0721, 4.711] },
  { markerOffset: 15, name: "Quito (99)", coordinates: [-78.4678, -0.1807] },
  { markerOffset: -30, name: "Georgetown (125)", coordinates: [-58.1551, 6.8013] },
  { markerOffset: -30, name: "Asuncion (132)", coordinates: [-57.5759, -25.2637] },
  { markerOffset: 15, name: "Paramaribo (98)", coordinates: [-55.2038, 5.852] },
  { markerOffset: 15, name: "Montevideo (47)", coordinates: [-56.1645, -34.9011] },
  { markerOffset: 15, name: "Caracas (261)", coordinates: [-66.9036, 10.4806] },
  { markerOffset: 15, name: "Lima (74)", coordinates: [-77.0428, -12.0464] }
];

const StoreMap = () => {
  return (
    <Card>
        <CardHeader title="Store and Inventory"></CardHeader>
<ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [58.0, 20.0],
        scale: 5gi00
      }}
    >
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies
            .filter(d => d.properties.REGION_UN === "Americas")
            .map(geo => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="#EAEAEC"
                stroke="#D6D6DA"
              />
            ))
        }
      </Geographies>
      {markers.map(({ name, coordinates, markerOffset }) => (
        <Marker key={name} coordinates={coordinates}>
          <g
            fill="none"
            stroke="#FF5533"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            transform="translate(-12, -24)"
          >
            <circle cx="12" cy="10" r="3" />
            <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
          </g>
          <text
            textAnchor="middle"
            y={markerOffset}
            style={{ fontFamily: "system-ui", fill: "#5D5A6D" }}
          >
            {name}
          </text>
        </Marker>
      ))}
    </ComposableMap>
    </Card>
  );
};

export default StoreMap;
