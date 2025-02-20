export interface IGeoLocation {
  lat: number;
  lon: number;
}

export interface ICity extends IGeoLocation {
  name: string;
  country: string;
}
