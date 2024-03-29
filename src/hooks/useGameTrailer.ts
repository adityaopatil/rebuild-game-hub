import { useQuery } from "@tanstack/react-query";
import APIClient, { FetchResponse } from "../services/api-client";
import { Trailer } from "../entities/Trailer";

const useGameTrailer = (slug: string) => {
  const apiClient = new APIClient<Trailer>(`/games/${slug}/movies`);

  return useQuery({
    queryKey: ["trailers", slug],
    queryFn: () => apiClient.getAll(),
  });
};

export default useGameTrailer;
