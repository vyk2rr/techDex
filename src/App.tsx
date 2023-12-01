import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"

import Product from "./product.tsx";

import './App.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <>Just an index!</>,
    errorElement: <>Errorrrrr</>
  },
  {
    path: "/products/:productId",
    element: <Product />
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
