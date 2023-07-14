import { NextRequest, NextResponse } from "next/server"
import { featureCollection, point } from "@turf/helpers"

import getEsClient from "@/lib/elasticsearch"

export async function GET(request: NextRequest) {
  try {
    const results = await getLocations()
    return NextResponse.json(results)
  } catch (error: any) {
    return NextResponse.json({ error: error.message })
  }
}

export async function getLocations() {
  const { body } = await getEsClient("eu-cluster").search<{
    CENTER_LAT: number
    CENTER_LON: number
  }>({
    index: "general_config",
    size: 10000,
    body: {
      _source: {
        includes: ["CENTER_LAT", "CENTER_LON"],
      },
    },
  })
  const points_features = body.hits.hits.map(({ _source, _id }) => {
    const src = _source!
    const id = _id as string
    const toPoint = point([src.CENTER_LON, src.CENTER_LAT], { id }, { id })
    return toPoint
  })
  return featureCollection(points_features)
}
