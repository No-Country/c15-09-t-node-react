import { useEffect, useState } from "react";

export const useGetService = (service) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const getData = async () => {
    setLoading(true);
    try {
      const response = await service();
      setData(response);
    } catch (err) {
      console.error({ err });
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [data, loading, error];
};
