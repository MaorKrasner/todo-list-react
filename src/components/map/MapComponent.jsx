import "ol/ol.css";

import { OSM } from "ol/source";
import { Point } from "ol/geom";
import { Style, Icon } from "ol/style";
import { Map, View, Feature } from "ol";
import { Tile as TileLayer } from "ol/layer";
import { fromLonLat, toLonLat } from "ol/proj";
import React, { useEffect, useRef } from "react";
import { Vector as VectorLayer } from "ol/layer";
import { Vector as VectorSource } from "ol/source";

import { useTasks } from "contexts/tasksContext";

const MapComponent = ({ canPoint, setLocation }) => {
  const mapRef = useRef();
  const vectorSourceRef = useRef(new VectorSource());
  const { tasks } = useTasks();

  useEffect(() => {
    const initialMap = new Map({
      target: mapRef.current,
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
        new VectorLayer({
          source: vectorSourceRef.current,
        }),
      ],
      view: new View({
        center: fromLonLat([0, 0]),
        zoom: 2,
      }),
    });

    const handleMapClick = (event) => {
      if (canPoint) {
        const coordinate = event.coordinate;
        const lonLat = toLonLat(coordinate);
        setLocation(lonLat);

        vectorSourceRef.current.clear();

        const newFeature = new Feature({
          geometry: new Point(coordinate),
        });

        newFeature.setStyle(
          new Style({
            image: new Icon({
              src: "https://openlayers.org/en/latest/examples/data/icon.png",
              scale: 0.7,
            }),
          })
        );

        vectorSourceRef.current.addFeature(newFeature);
      }
    };

    initialMap.on("singleclick", handleMapClick);

    tasks.forEach((task) => {
      const location = task.location;
      // const coordinate = fromLonLat([location.lon, location.lat]);
      const taskFeature = new Feature({
        geometry: new Point(location),
      });

      taskFeature.setStyle(
        new Style({
          image: new Icon({
            src: "https://openlayers.org/en/latest/examples/data/icon.png",
            scale: 0.7,
          }),
        })
      );

      vectorSourceRef.current.addFeature(taskFeature);
    });

    return () => {
      initialMap.setTarget(null);
    };
  }, [canPoint, setLocation, tasks]);

  return <div ref={mapRef} style={{ width: "100%", height: "400px" }} />;
};

export default MapComponent;
