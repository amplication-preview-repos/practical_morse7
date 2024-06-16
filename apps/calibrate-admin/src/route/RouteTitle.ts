import { Route as TRoute } from "../api/route/Route";

export const ROUTE_TITLE_FIELD = "finishLocation";

export const RouteTitle = (record: TRoute): string => {
  return record.finishLocation?.toString() || String(record.id);
};
