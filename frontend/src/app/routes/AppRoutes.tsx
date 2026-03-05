import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import LoginPage from '../../features/auth/pages/LoginPage';
import RegisterPage from '../../features/auth/pages/RegisterPage';
// import DashboardPage from '../../features/dashboard/pages/DashboardPage';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {/* Public routes */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      
      {/* Protected routes */}
      <Route element={<ProtectedRoute />}>
        {/* <Route path="/dashboard" element={<DashboardPage />} /> */}
        {/* Add other protected routes here */}
      </Route>
      
      {/* Redirect root to dashboard or login */}
      {/* <Route path="/" element={<Navigate to="/dashboard" replace />} /> */} //!--------------------------
    </Routes>
  );
};

export default AppRoutes;