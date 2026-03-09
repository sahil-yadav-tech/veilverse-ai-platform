import { Route } from "react-router-dom";
import Products from "../pages/Products";


export const productRoutes = (
  <>
    <Route path="/products" element={<Products />} />
  </>
);