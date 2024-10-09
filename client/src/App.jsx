import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import AppLayout from "./ui/AppLayout";
import Home, { loader as homeLoader } from "./features/home/Home";
import Error from "./ui/Error";
import LandingPage from "./features/landing page/LandingPage";
import SignUp from "./features/auth/SignUp";
import Login from "./features/auth/Login";
import CreatePost, {
  loader as createPostLoader,
} from "./features/post/CreatePost";
import PostContent from "./features/post/PostContent";
// import Temp from "./features/auth/Temp";
const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/sign-up",
        element: <SignUp />,
      },
      {
        path: "/home",
        element: <Home />,
        loader: homeLoader,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "/create-post",
        element: <CreatePost />,
        loader: createPostLoader,
      },
      {
        path: "/post/:id",
        element: <PostContent />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
