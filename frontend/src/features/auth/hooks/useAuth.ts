import { useDispatch, useSelector } from 'react-redux';
import { useCallback, useEffect } from 'react';
import { login, register, logout, getCurrentUser, clearError } from '../store/authSlice';
import { LoginCredentials, RegisterCredentials } from '../../../types/auth.types';
import type { AppDispatch, RootState } from '../../../app/store/store';

export const useAuth = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { user, isLoading, error, isAuthenticated } = useSelector(
    (state: RootState) => state.auth
  );

  useEffect(() => {
    // Check if user is authenticated on mount
    const token = localStorage.getItem('token');
    if (token && !user) {
      dispatch(getCurrentUser());
    }
  }, [dispatch, user]);

  const handleLogin = useCallback(
    async (credentials: LoginCredentials) => {
      return await dispatch(login(credentials)).unwrap();
    },
    [dispatch]
  );

  const handleRegister = useCallback(
    async (credentials: RegisterCredentials) => {
      return await dispatch(register(credentials)).unwrap();
    },
    [dispatch]
  );

  const handleLogout = useCallback(async () => {
    await dispatch(logout());
  }, [dispatch]);

  const handleClearError = useCallback(() => {
    dispatch(clearError());
  }, [dispatch]);

  return {
    user,
    isLoading,
    error,
    isAuthenticated,
    login: handleLogin,
    register: handleRegister,
    logout: handleLogout,
    clearError: handleClearError,
  };
};