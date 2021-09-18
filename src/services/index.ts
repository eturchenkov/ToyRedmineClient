/* eslint-disable functional/immutable-data */
import axios, { AxiosError, AxiosInstance } from "axios"

class AuthService {
  token: string
  agent: AxiosInstance
  constructor(agent: AxiosInstance) {
    this.token = "digest"
    this.agent = agent
  }
  isAuthenticated() {
    return Boolean(localStorage.getItem(this.token))
  }
  setAuthData(creds: string) {
    this.token = creds
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    this.agent.defaults.headers.common.Authorization = creds
  }
  removeAuthData() {
    localStorage.removeItem(this.token)
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
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
