/* eslint-disable functional/immutable-data */
import axios, { AxiosError, AxiosInstance } from "axios"

class AuthService {
  token: string
  agent: AxiosInstance
  constructor(agent: AxiosInstance) {
    this.token = "short"
    this.agent = agent
    this.agent.defaults.headers.common.Authorization =
      "Basic dGVzdDp0ZXN0dGFzaw=="
    // this.agent.defaults.headers.common["X-Redmine-API-Key"] =
    // "2fda745bb4cdd835fdf41ec1fab82a13ddc1a54c"
    // this.agent.defaults.headers.common["key"] =
    // this.agent.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest"
  }
  isAuthenticated() {
    return true
    // return Boolean(localStorage.getItem(this.token))
  }
  setAuthData(creds: string) {
    this.token = creds
    this.agent.defaults.headers.common.Authorization = creds
  }
  removeAuthData() {
    localStorage.removeItem(this.token)
    this.agent.defaults.headers.common.Authorization = ""
  }
}

export const baseUrl = "https://redmine.ekreative.com"
export const getFullPath = (path: string): string => baseUrl + path
export const agent = axios.create({ baseURL: baseUrl })
export const authService = new AuthService(agent)

agent.interceptors.response.use(
  (res) => res,
  (err: AxiosError) => {
    if (err.response?.status === 401) {
      authService.removeAuthData()
    }
    return Promise.reject(err)
  },
)
