import { combineReducers } from '@reduxjs/toolkit';
import authReducer from '../../features/auth/store/authSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  // Add other feature reducers here
});

export default rootReducer;