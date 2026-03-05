import { BrowserRouter } from 'react-router-dom';
import { ReduxProvider } from './app/providers/ReduxProvider';
import AppRoutes from './app/routes/AppRoutes';
import './App.css';

function App() {
  return (
    <ReduxProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ReduxProvider>
  );
}

export default App;