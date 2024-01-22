import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";

import APIClient, { FetchResponse } from "../services/api-client";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const apiClient = new APIClient<Platform>("/platforms");

const usePlatform = () => {
  return useQuery<FetchResponse<Platform>, Error>({
    queryKey: ["platforms"],
    queryFn: () => apiClient.getAll(),
    staleTime: 24 * 60 * 60 * 1,
    initialData: { count: platforms.length, results: platforms, next: null },
  });
};

export default usePlatform;
