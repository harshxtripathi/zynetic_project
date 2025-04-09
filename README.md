# Weather Dashboard

A modern weather dashboard built with React, TypeScript, and Tailwind CSS. This application allows users to search for any city and view its current weather information using the OpenWeatherMap API.

## Features

- Real-time weather data for any city
- Responsive design for mobile and desktop
- Recent search history
- Loading states and error handling
- Dark/Light theme support
- Smooth animations using Framer Motion

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- OpenWeatherMap API key

## Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. **Important: Set up your OpenWeatherMap API key**
   - Get your free API key from [OpenWeatherMap](https://openweathermap.org/api)
   - Create a `.env` file in the root directory
   - Add your API key to the `.env` file:
     ```
     VITE_OPENWEATHER_API_KEY=your_actual_api_key_here
     ```
   - Replace `your_actual_api_key_here` with the API key you got from OpenWeatherMap
4. Start the development server:
   ```bash
   npm run dev
   ```

## Building for Production

To create a production build:

```bash
npm run build
```

The build files will be in the `dist` directory.

## Technologies Used

- React
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- React Query
- Axios

## API Reference

This project uses the OpenWeatherMap API. You can get your free API key at:
https://openweathermap.org/api

## Troubleshooting

### API Key Issues

If you see an error about an invalid API key:
1. Make sure you've created a `.env` file in the root directory
2. Ensure you've replaced the placeholder with your actual API key
3. Restart the development server after making changes to the `.env` file

## License

MIT 