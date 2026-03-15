import axios from "axios"

const API = axios.create({
  baseURL: "https://antigravity-xprd.onrender.com/api"
})

export const saveSearch = (query) => API.post("/search", { query })
export const getSearches = () => API.get("/search")