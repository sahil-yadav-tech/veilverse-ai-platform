import { BrowserRouter } from "react-router-dom";
import { ReduxProvider } from "./app/providers/ReduxProvider";
import AppRoutes from "./app/routes/AppRoutes";
import { useEffect } from "react";
import { connectSocket } from "./core/socket/socketManager";

function App() {
  useEffect(() => {
    connectSocket();
  });
  return (
    <ReduxProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ReduxProvider>
  );
}

export default App;
