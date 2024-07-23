import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8080/api/v1",
});

export const signup = (formData) => API.post("/users/register", formData);

// export const login = (formData) => API.post("/users/login", formData);
