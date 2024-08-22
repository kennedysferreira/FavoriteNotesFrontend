import axios from "axios"

export const api = axios.create({
  baseURL: "https://favoritenotes-api.onrender.com"
})