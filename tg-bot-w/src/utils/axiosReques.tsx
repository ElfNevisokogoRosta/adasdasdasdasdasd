import axios from "axios"

export const axiosRequest = axios.create({
    baseURL: 'https://best-obmen.com/api'
  })
  