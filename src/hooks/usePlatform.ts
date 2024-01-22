import platforms from "../data/platforms";
import useData from "./useData";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatform = () =>
  useData<Platform>("/platforms", ["platforms"], platforms);

export default usePlatform;
