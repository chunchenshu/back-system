import axios from "axios";
const instance = axios.create({
    baseURL: 'https://some-domain.com/api/',//后端url地址
    timeout: 6000,
    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
  });