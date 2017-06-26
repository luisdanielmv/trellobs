import axios from 'axios';

export function getAxiosInstance() {
    const baseURL = 'https://bstrello.herokuapp.com/api',
          headers = { Authorization: localStorage.getItem('jwt') }

    const instance = axios.create({baseURL, headers});

    return instance;
}
      