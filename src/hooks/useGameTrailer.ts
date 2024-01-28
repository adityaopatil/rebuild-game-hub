import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";

interface Trailer {
  id: number;
  name: string;
  preview: string;
  data: { 480: string; max: string };
}

const useGameTrailer = (slug: string) => {
  const apiClient = new APIClient<Trailer>(`/games/${slug}/movies`);

  return useQuery({
    queryKey: ["trailers", slug],
    queryFn: () => apiClient.getAll(),
  });
};

export default useGameTrailer;
