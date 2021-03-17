/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosResponse } from 'axios'

const baseAxios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
  withCredentials: true,
  responseType: 'json',
  timeout: 5000,
})

const myAxios = {
  get: (endpoint: string): Promise<AxiosResponse> => baseAxios.get(endpoint),

  post: (endpoint: string, body: any): Promise<AxiosResponse> => baseAxios.post(endpoint, body),

  put: (endpoint: string, body: any): Promise<AxiosResponse> => baseAxios.put(endpoint, body),

  delete: (endpoint: string): Promise<AxiosResponse> => baseAxios.delete(endpoint),
}

export default myAxios
