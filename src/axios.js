import axios from 'axios';
/**
 * Make a link to database port
 * 
 */
export default axios.create({
  baseURL: 'http://localhost:3000',
  withCredentials: true 
});
