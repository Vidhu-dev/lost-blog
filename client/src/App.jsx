import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import AppLayout from "./ui/AppLayout";
import Home from "./features/home/Home";
import Error from "./ui/Error";
const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [{ path: "/", element: <Home /> }],
    errorElement: <Error />,
  },
  {},
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
