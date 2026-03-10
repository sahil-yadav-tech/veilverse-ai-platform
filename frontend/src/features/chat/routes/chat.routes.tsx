import { Route } from "react-router-dom";
import ChatPage from "../../chat/pages/ChatPage";


export const chatRoutes = (
  <>
    <Route path="/chat" element={<ChatPage />} />
  </>
);