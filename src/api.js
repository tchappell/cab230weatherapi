import { useState, useEffect } from 'react';
const API_KEY = 'fe1ff62a23be4a588a212924261703';
const API_BASE = 'https://api.weatherapi.com/v1';
const QUERY = 'Brisbane';

function getForecastByQuery(q)
{
  const url = `${API_BASE}/forecast.json?key=${API_KEY}&q=${q}&days=1`;
  return fetch(url)
    .then(res => res.json())
    .then(res => res.forecast.forecastday[0].hour)
    .then(forecasts => forecasts.map(
      forecast => ({
        time: forecast.time,
        temp: forecast.temp_c,
        text: forecast.condition.text,
        wind: forecast.wind_kph,
        icon: forecast.condition.icon
      })
    ));
}

export function useWeather() {
  const [loading, setLoading] = useState(true);
  const [headlines, setHeadlines] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() =>
    {
      getForecastByQuery(QUERY)
      .then(forecasts => {
        setHeadlines(forecasts);
      })
      .catch(error => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      })
    }
  , []);


  return {
    loading,
    headlines,
    error
  };
}