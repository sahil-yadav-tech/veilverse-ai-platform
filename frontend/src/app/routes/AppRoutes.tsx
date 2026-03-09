import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import MainLayout from "../../shared/layouts/MainLayout";

import { homeRoutes } from "../../features/home/routes/homeroutes";
import { productRoutes } from "../../features/products/routes/product.routes";

const AppRoutes = () => {
  return (
    <Routes>

      {/* Public Layout */}
      <Route element={<MainLayout />}>
        {homeRoutes}
        {productRoutes}
      </Route>

      {/* Protected Layout */}
      <Route element={<ProtectedRoute />}>
        <Route element={<MainLayout />}>
          {/* protected pages */}
        </Route>
      </Route>

    </Routes>
  );
};

export default AppRoutes;