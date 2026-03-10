import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import MainLayout from "../../shared/layouts/MainLayout";

import { homeRoutes } from "../../features/home/routes/homeroutes";
import { productRoutes } from "../../features/products/routes/product.routes";
import NotFoundPage from "../../shared/components/NotFoundPage/NotFoundPage";
import { exploreRoutes } from "../../features/explore/routes/exploreroutes";
import { chatRoutes } from "../../features/chat/routes/chat.routes";

const AppRoutes = () => {
  return (
    <Routes>

      {/* Public Layout */}
      <Route element={<MainLayout />}>
        {homeRoutes}
        {exploreRoutes}
        {productRoutes}
        {chatRoutes}

        //TODO:- NOT FOUND 
        <Route path="*" element={<NotFoundPage />} />
      </Route>

      {/* Protected Layout */}
      <Route element={<ProtectedRoute />}>
        <Route element={<MainLayout />}>
          {/* protected pages */}

        <Route path="*" element={<NotFoundPage />} />

        </Route>
      </Route>

    </Routes>
  );
};

export default AppRoutes;