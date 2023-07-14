"use client"

import React, { useCallback, useState } from "react"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import mapboxgl from "mapbox-gl"
import {
  Layer,
  Map,
  Source,
  ViewState,
  ViewStateChangeEvent,
} from "react-map-gl"

import { Deployment_Locations } from "@/types/data"

type Props = {}

const DeploymentsMap = (props: Props) => {
  const [viewState, setViewState] = useState<ViewState>({
    bearing: 0,
    latitude: 0,
    longitude: 0,
    pitch: 0,

    zoom: 0,
    padding: { left: 0, right: 0, top: 0, bottom: 0 },
  })
  const onMove = useCallback(({ viewState: newView }: ViewStateChangeEvent) => {
    const zoom = newView.zoom >= 5 ? 5 : newView.zoom
    setViewState({ ...newView, zoom })
  }, [])
  const { data } = useQuery({
    queryKey: ["deployment_locations"],
    queryFn: () =>
      axios
        .get<Deployment_Locations>("/api/deployment-locations")
        .then((response) => response.data),
  })
  if (!data) return null
  return (
    <div className="relative h-[500px] w-full flex justify-center overflow-hidden ">
      <div className="absolute h-[400px] w-2/3  ">
        <Map
          attributionControl={false}
          mapLib={mapboxgl}
          reuseMaps
          styleDiffing
          preserveDrawingBuffer
          mapStyle="mapbox://styles/mapbox/navigation-night-v1"
          mapboxAccessToken="pk.eyJ1IjoiaWI5OCIsImEiOiJjbGhhbTRuaXUwOGliM2Ruc3h2YTFoMG9yIn0.YtRfHX0vI6aXB6WBD6hajg"
          {...viewState}
          onMove={onMove}
        >
          <Source
            type="geojson"
            data={data}
            cluster
            clusterMaxZoom={14}
            clusterRadius={50}
          >
            <Layer
              id="clusters"
              type="circle"
              filter={["has", "point_count"]}
              paint={{
                "circle-color": [
                  "step",
                  ["get", "point_count"],
                  "#51bbd6",
                  100,
                  "#f1f075",
                  750,
                  "#f28cb1",
                ],
                "circle-radius": [
                  "step",
                  ["get", "point_count"],
                  20,
                  100,
                  30,
                  750,
                  40,
                ],
              }}
            />
            <Layer
              id="cluster-count"
              type="symbol"
              filter={["has", "point_count"]}
              layout={{
                "text-field": "{point_count_abbreviated}",
                "text-font": ["DIN Offc Pro Medium", "Arial Unicode MS Bold"],
                "text-size": 12,
              }}
            />
            <Layer
              id="unclustered-point"
              type="circle"
              filter={["!", ["has", "point_count"]]}
              paint={{
                "circle-color": "#11b4da",
                "circle-radius": 4,
                "circle-stroke-width": 1,
                "circle-stroke-color": "#fff",
              }}
            />
          </Source>
        </Map>
      </div>
    </div>
  )
}

export default DeploymentsMap
