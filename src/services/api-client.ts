import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "c721799ce2b146c18693332534c8328c",
  },
});
