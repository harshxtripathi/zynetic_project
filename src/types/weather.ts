export interface WeatherData {
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  weather: Array<{
    id: number;
    main: string;
    description: string;
    icon: string;
  }>;
  name: string;
  sys: {
    country: string;
  };
  wind: {
    speed: number;
    deg: number;
  };
}

export interface SearchHistory {
  city: string;
  timestamp: number;
} 