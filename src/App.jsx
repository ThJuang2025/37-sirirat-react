import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./views/Home";
import Owner from "./views/Owner";
import AdminView from "./views/AdminView";
import UserView from "./views/UserView";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement:(
      <div className="min-h-screen flex justify-center items-center">
        <h1 className="text-4xl">404-Page Not Found 🙅‍♂️</h1>
      </div>
    ),
    children: [
      {path: "/", element: <Home />},
      {path: "owner", element: <Owner />},
      {path: "user", element: <UserView />},
      {path: "admin", element: <AdminView />}
    ],
  },
]);

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}
