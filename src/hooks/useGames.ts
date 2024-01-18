import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
import { Genre } from "./useGenres";
import { Platform } from "./usePlatform";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

interface FetchGamesResponse {
  count: number;
  results: Game[];
}

const useGames = (
  selectedGenre: Genre | null,
  selectedPlatform: Platform | null,
  deps: any
) => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(true);

  useEffect(
    () => {
      const controller = new AbortController();
      apiClient
        .get<FetchGamesResponse>("/games", {
          signal: controller.signal,
          params: {
            genres: selectedGenre?.id,
            platforms: selectedPlatform?.id,
          },
        })
        .then((res) => {
          setLoading(false);
          setGames(res.data.results);
        })
        .catch((err) => {
          if (err instanceof CanceledError) return;
          setError(err.message);
          setLoading(false);
        });

      return () => controller.abort();
    },
    deps ? [...deps] : []
  );

  return { games, error, isLoading };
  //Here we return the properties which we want to export
  //using our hook
};

export default useGames;
