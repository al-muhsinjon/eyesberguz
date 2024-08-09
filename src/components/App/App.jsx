import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import MainLayout from "../../Layout/MainLayout/MainLayout";
import Home from "../Home/Home";
import { MyOrders } from "../MyOrders/MyOrders";
import { Vacancy } from "../Vacancy/ui/Vacancy";
import { Spec } from "../Spec/Spec";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "cabinet",
          element: <MyOrders />,
        },
        {
          path: "job",
          element: <Vacancy/>
        },
        {
          path: 'spec',
          element: <Spec/>
        }
      ],
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;