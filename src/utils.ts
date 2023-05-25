import { AxiosRequestConfig } from "axios";

export function createAxiosHeader(contentType: string, accept: string, connection: string, date?: string) {
    let headers;
    if(date) {
        headers = {
            'Content-Type': contentType,
            'If-Modified-Since': date,
            Authorization: 'Bearer ' + connection,
            accept
        }
    } else {
        headers = {
            'Content-Type': contentType,
            Authorization: 'Bearer ' + connection,
            accept
        }
    }

    const axiosRequestConfig: AxiosRequestConfig = {
      headers,
      maxBodyLength: Infinity,
      maxContentLength: Infinity
    }
  
    return axiosRequestConfig;
}