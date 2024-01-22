import apiClient from "../services/api-client";
import { useQuery } from "@tanstack/react-query";

interface FetchResponse<T> {
  count: number;
  results: T[];
}

const useData = <T>(
  endpoint: string,
  CACHE_KEY: string[],
  static_data?: T[]
) => {
  const fetchGenres = () => {
    return apiClient
      .get<FetchResponse<T>>(endpoint)
      .then((res) => res.data.results);
  };

  return useQuery<T[], Error>({
    queryKey: CACHE_KEY,
    queryFn: fetchGenres,
    staleTime: 1 * 60 * 1000,
    keepPreviousData: true,
    initialData: static_data,
  });
};

export default useData;
