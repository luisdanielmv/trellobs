import axios from 'axios';

export function getAxiosInstance() {
    const baseURL = 'https://powerful-caverns-20187.herokuapp.com/api',
          headers = { Authorization: localStorage.getItem('jwt') }

    const instance = axios.create({baseURL, headers});

    return instance;
}
      