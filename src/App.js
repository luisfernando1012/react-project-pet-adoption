import { createBrowserRouter, RouterProvider, createHashRouter } from "react-router-dom";



import Home from "./views/Home.js/Home";
import ErrorBoundary from "./views/ErrorBoundary/ErrorBoundary";
import Details from "./views/Details/Details";
// import { Children } from "react";

// const basename = process.env.NODE_ENV === 'production' ? "/react-project-pet-adoption" : "";
const basename = process.env.PUBLIC_URL;
const routes = [
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorBoundary />

  },
  {
    path: "/details/:petId",
    element: <Details />,
  }

];
const router = createBrowserRouter(routes, {basename});

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
