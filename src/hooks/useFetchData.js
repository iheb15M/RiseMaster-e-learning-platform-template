import { useState, useEffect } from 'react';

const useFetchData = (path, mapFn = undefined) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const baseUrl = process.env.REACT_APP_API_URL;
      if (!baseUrl) {
        setError('API URL is not set');
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(`${baseUrl}/${path}`);
        if (!response.ok) {
          throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }

        const contentType = response.headers.get('content-type');
        if (!contentType || !contentType.includes('application/json')) {
          throw new Error('Received non-JSON response');
        }

        const result = await response.json();

        if (mapFn) {
            const parsedData = result.map(mapFn);
            setData(parsedData);   
        }else {
            setData(result);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [path]);

  return [data, loading, error];
};

export default useFetchData;
