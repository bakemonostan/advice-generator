import { useState, useEffect } from 'react';

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController(); // we're gonna pass this as a parameter in the header when fetching data to help as a cleanup fumnction

    const fetchData = async () => {
      // set loading state
      setIsPending(true);

      try {
        const response = await fetch(url, { signal: controller.signal });

        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const data = await response.json();

        setIsPending(false);

        setData(data);

        setError(null);
      } catch (error) {
        if (error.name === 'AbortError') {
          console.log('Fetch was aborted');
        } else {
          setIsPending(false);

          setError(error.name);

          console.log(error);
        }
      }
    };
    fetchData();

    return () => {
      controller.abort();
    };
  }, [url]);

  // return a clean up functiom

  return { data, isPending, error };
};
