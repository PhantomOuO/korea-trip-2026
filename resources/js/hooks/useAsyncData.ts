import { useEffect, useState } from 'react';

export const useAsyncData = <T,>(loader: () => Promise<T>, initialValue: T) => {
  const [data, setData] = useState<T>(initialValue);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    const run = async () => {
      setLoading(true);
      const result = await loader();
      if (mounted) {
        setData(result);
        setLoading(false);
      }
    };

    void run();

    return () => {
      mounted = false;
    };
  }, [loader]);

  return { data, loading };
};
