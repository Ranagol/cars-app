
import axios from 'axios';

export const HTTP = axios.create({
  baseURL: "http://localhost:3000/api"//this is the base url of the api
})