import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "8ab881e04fe2403abd28125562474b51",
  },
});
