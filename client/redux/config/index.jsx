import axios from 'axios';

export function getAxiosInstance() {
    const baseURL = 'http://localhost:7777/api',
          headers = { Authorization: localStorage.getItem('jwt') }

    const instance = axios.create({baseURL, headers});

    return instance;
}
      