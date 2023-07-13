import { useState, useEffect } from 'react';

export function useFetch(url) {
  const [fetchedData, setFetchedData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const controller = new AbortController();

    const fetchMovies = async () => {
      try {
        setIsLoading(true);
        setError('');

        const res = await fetch(url, { signal: controller.signal });

        if (!res.ok) throw new Error('Something went wrong with fetching movies');

        const fetchedData = await res.json();
        if (fetchedData.response === 'False') throw new Error('Data not found');

        setFetchedData(fetchedData);
        setError('');
      } catch (err) {
        if (err.name !== 'AbortError') {
          setError(err.message);
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovies();

    return () => {
      controller.abort();
    };
  }, [url]);

  return { data: fetchedData, isLoading, error };
}
