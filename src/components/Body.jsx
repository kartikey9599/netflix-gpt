import Browse from "./Browse";
import LoginPage from "./LoginPage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const Body = () => {
  const appRoute = createBrowserRouter([
    {
      path: "/",
      element: <LoginPage />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={appRoute} />
    </div>
  );
};

export default Body;
