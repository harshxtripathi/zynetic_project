import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';
import WeatherDashboard from './components/WeatherDashboard';
import SearchBar from './components/SearchBar';
import { SearchHistory } from './types/weather';

const queryClient = new QueryClient();

function App() {
  const [searchHistory, setSearchHistory] = useState<SearchHistory[]>([]);
  const [currentCity, setCurrentCity] = useState<string>('');

  const handleSearch = (city: string) => {
    setCurrentCity(city);
    const newSearch: SearchHistory = {
      city,
      timestamp: Date.now(),
    };
    setSearchHistory((prev) => {
      const updated = [newSearch, ...prev].slice(0, 5);
      return updated;
    });
  };

  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-center mb-8 text-gray-800 dark:text-white">
            Weather Dashboard
          </h1>
          <SearchBar onSearch={handleSearch} />
          <WeatherDashboard
            currentCity={currentCity}
            searchHistory={searchHistory}
          />
        </div>
      </div>
    </QueryClientProvider>
  );
}

export default App; 