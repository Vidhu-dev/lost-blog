import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8080/api/v1",
});

export const signup = (formData) => API.post("/users/register", formData);
export const login = (formData) =>
  API.post("/users/login", formData, { withCredentials: true });
export const logout = (formData) =>
  API.post("/users/logout", formData, { withCredentials: true });

//post
export const create_post = (formData) =>
  API.post("/post/create-post", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
    withCredentials: true,
  });

//category

export async function getCategories() {
  try {
    const response = await API.get("/category/get-categories");
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
