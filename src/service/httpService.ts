// httpService.js
import axios from "axios";

const httpService = axios.create({
  baseURL: "https://rickandmortyapi.com/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default httpService;
