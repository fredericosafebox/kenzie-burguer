import axios from "axios";

export const api = axios.create({
  baseURL: "https://hamburgueria-kenzie-json-serve.herokuapp.com/",
  timeout: 5000,
});

//endpoint - products
