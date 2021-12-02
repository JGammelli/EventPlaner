import axios from 'axios';

let APIKit = axios.create({
    // headers: {
    //     'Content-Type': 'application/json'
    //   },
      withCredentials: true,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
     }


});

export const setClientToken = token => {
  APIKit.interceptors.request.use(function(config) {
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  });
};

export default APIKit;