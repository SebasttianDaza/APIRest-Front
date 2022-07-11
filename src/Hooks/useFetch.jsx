import { useCallback, useState } from "react";

import sendRequest from "../Services/sendRequest";

const useFetch = () => {
  const [fetchState, setFetchState] = useState({
    isLoading: false,
    isError: false,
    isSuccess: false,
    data: null,
    error: null,
  });

  const fetchData = useCallback(async ({ url, method, body }) => {
    try {
      setFetchState({
        isLoading: true,
        isError: false,
        isSuccess: false,
        data: null,
        error: null,
      });

      const data = await sendRequest({ url, method, body });

      setFetchState({
        isLoading: false,
        isError: false,
        isSuccess: true,
        data,
        error: null,
      });
    } catch (error) {
      setFetchState({
        isLoading: false,
        isError: true,
        isSuccess: false,
        data: null,
        error,
      });
    }
  }, []);

  return [fetchState, fetchData];
};

export default useFetch;
