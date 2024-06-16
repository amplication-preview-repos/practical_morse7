import { SensorData as TSensorData } from "../api/sensorData/SensorData";

export const SENSORDATA_TITLE_FIELD = "id";

export const SensorDataTitle = (record: TSensorData): string => {
  return record.id?.toString() || String(record.id);
};
