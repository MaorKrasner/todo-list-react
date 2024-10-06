import React, { useEffect } from "react";
import "ol/ol.css";
import { Map, View } from "ol";
import { Tile as TileLayer } from "ol/layer";
import { OSM } from "ol/source";
import { fromLonLat, toLonLat } from "ol/proj";
import { Vector as VectorLayer } from "ol/layer";
import { Vector as VectorSource } from "ol/source";
import { Feature } from "ol";
import { Point } from "ol/geom";
import { Style, Icon } from "ol/style";

const MapComponent = ({ tasks }) => {
  useEffect(() => {
    const vectorSource = new VectorSource();
    const vectorLayer = new VectorLayer({
      source: vectorSource,
    });

    const map = new Map({
      target: "map",
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
        vectorLayer,
      ],
      view: new View({
        center: fromLonLat([0, 0]),
        zoom: 2,
      }),
    });

    const addTaskPin = (task) => {
      if (!task.location) return;

      const pin = new Feature({
        geometry: new Point(fromLonLat(task.location)),
      });

      pin.setStyle(
        new Style({
          image: new Icon({
            src: task.completed
              ? "https://cdn-icons-png.flaticon.com/512/684/684908.png"
              : "https://cdn-icons-png.flaticon.com/512/64/64113.png",
            scale: 0.05,
            color: task.completed ? "green" : "red",
          }),
        })
      );

      pin.set("taskInfo", task.text);

      vectorSource.addFeature(pin);
    };

    tasks.forEach((task) => {
      addTaskPin(task);
    });

    return () => map.setTarget(null);
  }, [tasks]);

  return <div id="map" style={{ width: "100%", height: "400px" }}></div>;
};

export default MapComponent;
