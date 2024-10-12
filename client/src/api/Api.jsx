import axios from 'axios'

const Base = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL,
})

const BaseAPI = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL + "api/",
})

const BaseAdmin = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL + "admin/",
})

export { Base, BaseAPI, BaseAdmin }