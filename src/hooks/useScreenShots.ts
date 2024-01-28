import { useQuery } from "@tanstack/react-query";
import APIClient, { FetchResponse } from "../services/api-client";
import { ScreenShots } from "../entities/ScreenShots";

const useScreenShots = (slug: string) => {
  const apiClient = new APIClient<ScreenShots>(`/games/${slug}/screenshots`);

  return useQuery<FetchResponse<ScreenShots>>({
    queryKey: ["screenshots", slug],
    queryFn: () => apiClient.getAll(),
  });
};

export default useScreenShots;
