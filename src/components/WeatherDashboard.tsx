import { useQuery } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import { weatherApi } from '../services/weatherApi';
import { SearchHistory } from '../types/weather';
import WeatherCard from './WeatherCard';
import SearchHistoryList from './SearchHistoryList';

interface WeatherDashboardProps {
  currentCity: string;
  searchHistory: SearchHistory[];
}

const WeatherDashboard = ({ currentCity, searchHistory }: WeatherDashboardProps) => {
  console.log('WeatherDashboard rendered with city:', currentCity);
  
  const { data: weatherData, isLoading, error } = useQuery({
    queryKey: ['weather', currentCity],
    queryFn: () => weatherApi.getCurrentWeather(currentCity),
    enabled: !!currentCity,
    retry: 1,
    onError: (err) => {
      console.error('Query error:', err);
    },
    onSuccess: (data) => {
      console.log('Query success:', data);
    }
  });

  console.log('Weather data:', weatherData);
  console.log('Loading state:', isLoading);
  console.log('Error state:', error);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="md:col-span-2"
      >
        {currentCity ? (
          <WeatherCard
            weatherData={weatherData}
            isLoading={isLoading}
            error={error as Error}
          />
        ) : (
          <div className="text-center text-gray-600 dark:text-gray-400">
            Enter a city name to see the weather
          </div>
        )}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="md:col-span-1"
      >
        <SearchHistoryList searchHistory={searchHistory} />
      </motion.div>
    </div>
  );
};

export default WeatherDashboard; 