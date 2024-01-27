import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import ms from "ms";

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
    staleTime: ms("1d"),
    initialData: platforms,
  });
};

export default usePlatform;
