import { motion } from 'framer-motion';
import { SearchHistory } from '../types/weather';

interface SearchHistoryListProps {
  searchHistory: SearchHistory[];
}

const SearchHistoryList = ({ searchHistory }: SearchHistoryListProps) => {
  if (searchHistory.length === 0) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
          Recent Searches
        </h3>
        <p className="text-gray-600 dark:text-gray-400">No recent searches</p>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
        Recent Searches
      </h3>
      <ul className="space-y-2">
        {searchHistory.map((search, index) => (
          <motion.li
            key={search.timestamp}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <span className="text-gray-800 dark:text-white">{search.city}</span>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {new Date(search.timestamp).toLocaleTimeString()}
            </span>
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default SearchHistoryList; 