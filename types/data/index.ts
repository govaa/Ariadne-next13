import { FeatureCollection, Point } from "@turf/helpers";

export type Deployment_Locations = FeatureCollection<
  Point,
  {
    id: string;
  }
>;
