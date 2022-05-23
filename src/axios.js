import axios from 'axios';

export default axios.create({
  baseURL: 'http://localhost:3000'
});

export const getimgs = axios.get({
  baseURL: 'http://localhost:3000/img',
   
});

export const axiosPrivate = axios.create({
  baseURL: 'http://localhost:3000',
  headers: { 'Content-Type': 'application/json'}, 
  withCredentials: true
});