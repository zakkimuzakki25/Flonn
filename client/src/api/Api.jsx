import axios from 'axios'

const Base = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL,
})

const BaseAPI = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL + "/api/",
})

export { Base, BaseAPI }