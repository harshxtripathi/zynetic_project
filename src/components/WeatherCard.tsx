import { motion } from 'framer-motion';
import { WeatherData } from '../types/weather';
import { WiThermometer, WiHumidity, WiStrongWind } from 'react-icons/wi';

interface WeatherCardProps {
  weatherData?: WeatherData;
  isLoading: boolean;
  error: Error | null;
}

const WeatherCard = ({ weatherData, isLoading, error }: WeatherCardProps) => {
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (error) {
    const isApiKeyError = error.message.includes('API key');
    
    return (
      <div className={`${isApiKeyError ? 'bg-yellow-100 border-yellow-400 text-yellow-800' : 'bg-red-100 border-red-400 text-red-700'} border px-4 py-3 rounded relative`}>
        <strong className="font-bold">{isApiKeyError ? 'Setup Required: ' : 'Error: '}</strong>
        <span className="block sm:inline">{error.message}</span>
        {isApiKeyError && (
          <div className="mt-2 text-sm">
            <p>To fix this issue:</p>
            <ol className="list-decimal list-inside mt-1">
              <li>Get your API key from <a href="https://openweathermap.org/api" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">OpenWeatherMap</a></li>
              <li>Open the <code className="bg-gray-200 px-1 rounded">.env</code> file in the root directory</li>
              <li>Replace <code className="bg-gray-200 px-1 rounded">your_api_key_here</code> with your actual API key</li>
              <li>Restart the development server</li>
            </ol>
          </div>
        )}
      </div>
    );
  }

  if (!weatherData) return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
    >
      <div className="flex justify-between items-start mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
            {weatherData.name}, {weatherData.sys.country}
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            {weatherData.weather[0].description}
          </p>
        </div>
        <img
          src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
          alt={weatherData.weather[0].description}
          className="w-16 h-16"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="flex items-center space-x-2">
          <WiThermometer className="text-2xl text-primary" />
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-400">Temperature</p>
            <p className="text-xl font-semibold text-gray-800 dark:text-white">
              {Math.round(weatherData.main.temp)}°C
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <WiHumidity className="text-2xl text-primary" />
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-400">Humidity</p>
            <p className="text-xl font-semibold text-gray-800 dark:text-white">
              {weatherData.main.humidity}%
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <WiStrongWind className="text-2xl text-primary" />
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-400">Wind Speed</p>
            <p className="text-xl font-semibold text-gray-800 dark:text-white">
              {weatherData.wind.speed} m/s
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default WeatherCard; 