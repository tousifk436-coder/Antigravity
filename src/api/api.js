import axios from "axios"

const API = axios.create({
  baseURL: "http://localhost:5000/api"
})

export const saveSearch = (query) => API.post("/search", { query })
export const getSearches = () => API.get("/search")