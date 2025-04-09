import axios from 'axios';
import { WeatherData } from '../types/weather';

const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

// Check if API key is set
if (!API_KEY || API_KEY === 'your_api_key_here') {
  console.error('OpenWeatherMap API key is not set. Please add your API key to the .env file.');
} else {
  console.log('API key is set:', API_KEY.substring(0, 5) + '...');
}

export const weatherApi = {
  getCurrentWeather: async (city: string): Promise<WeatherData> => {
    try {
      // Check if API key is valid
      if (!API_KEY || API_KEY === 'your_api_key_here') {
        throw new Error('Please add your OpenWeatherMap API key to the .env file');
      }

      console.log(`Fetching weather for city: ${city}`);
      console.log(`API URL: ${BASE_URL}/weather?q=${city}&appid=${API_KEY.substring(0, 5)}...&units=metric`);

      const response = await axios.get(`${BASE_URL}/weather`, {
        params: {
          q: city,
          appid: API_KEY,
          units: 'metric',
        },
      });
      
      console.log('Weather data received:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error fetching weather data:', error);
      
      if (axios.isAxiosError(error)) {
        console.error('Axios error details:', {
          status: error.response?.status,
          statusText: error.response?.statusText,
          data: error.response?.data
        });
        
        if (error.response?.status === 401) {
          throw new Error('Invalid API key. Please check your OpenWeatherMap API key in the .env file');
        } else if (error.response?.status === 404) {
          throw new Error(`City "${city}" not found. Please check the spelling and try again.`);
        } else {
          throw new Error(error.response?.data?.message || 'Failed to fetch weather data');
        }
      }
      throw error;
    }
  },
}; 