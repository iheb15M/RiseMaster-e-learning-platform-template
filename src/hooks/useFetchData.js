import { useState, useEffect, useRef } from "react";
import api from "../services/api";

export default function useFetchData(path, mapFn = undefined) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const mapFnRef = useRef(mapFn);
  useEffect(() => {
    mapFnRef.current = mapFn;
  }, [mapFn]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await api.get(path);

        if (mapFnRef.current && typeof mapFnRef.current === "function") {
          const parsedData = result.map(mapFnRef.current);
          setData(parsedData);
        } else {
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
}
