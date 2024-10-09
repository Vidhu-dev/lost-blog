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

export async function get_all_posts() {
  try {
    const response = await API.get("/posts/get-all-posts", {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

//category
export async function get_categories() {
  try {
    const response = await API.get("/category/get-categories", {
      withCredentials: true,
    });
    console.log(response);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function get_userData() {
  try {
    const response = await API.get("/users/getUser", {
      withCredentials: true,
    });
    console.log(response);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function get_TopRatedPosts() {
  try {
    const response = await API.get("/posts/getTopRatedPosts", {
      withCredentials: true,
    });
    console.log(response);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function get_postContent(id) {
  console.log("id of the post is", id);

  try {
    const response = await API.get(`/post/get-post/${id}`, {
      withCredentials: true,
    });
    console.log(response);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}


// export async function refreshAccessToken() {
//   try {
//     const response = await API.get("/users/refresh-token", {
//       withCredentials: true,
//     }); // This endpoint will verify the refresh token and return a new access token
//     return response.data.accessToken;
//   } catch (error) {
//     console.error("Error refreshing access token:", error);
//     return null;
//   }
// }

// export async function initializeAuth() {
//   try {
//     // Refresh token automatically when the page is loaded
//     const accessToken = await refreshAccessToken();
//     if (!accessToken) {
//       console.log("User needs to log in again");
//       // Redirect user to login or handle logout
//     } else {
//       console.log("Access token refreshed successfully");
//     }
//   } catch (error) {
//     console.error("Error during auth initialization:", error);
//   }
// }
