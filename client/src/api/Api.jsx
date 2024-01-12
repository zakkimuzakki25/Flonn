import axios from 'axios'

const Base = axios.create({
  baseURL: "http://localhost:8080/",
})

const BaseAPI = axios.create({
  baseURL: "http://localhost:8080/api/",
})

export { Base, BaseAPI }