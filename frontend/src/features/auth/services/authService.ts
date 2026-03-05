import axiosInstance from '../../../core/api/axiosInstance';
import { API_ENDPOINTS } from '../../../core/api/apiEndpoints';
import { LoginCredentials, RegisterCredentials, AuthResponse, User } from '../../../types/auth.types';

class AuthService {
  async login(credentials: LoginCredentials): Promise<AuthResponse> {
    const response = await axiosInstance.post(API_ENDPOINTS.AUTH.LOGIN, credentials);
    return response.data;
  }

  async register(credentials: RegisterCredentials): Promise<AuthResponse> {
    const response = await axiosInstance.post(API_ENDPOINTS.AUTH.REGISTER, credentials);
    return response.data;
  }

  async logout(): Promise<void> {
    try {
      await axiosInstance.post(API_ENDPOINTS.AUTH.LOGOUT);
    } finally {
      // Always clear local storage even if API call fails
      localStorage.removeItem('token');
      localStorage.removeItem('refreshToken');
    }
  }

  async getCurrentUser(): Promise<User> {
    const response = await axiosInstance.get(API_ENDPOINTS.AUTH.ME);
    return response.data;
  }
}

export default new AuthService();