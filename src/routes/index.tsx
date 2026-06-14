import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import ChatWindow from "../pages/chats/pages/ChatWindow";
import SignIn from "../pages/auth/pages/Signin";
import Signup from "../pages/auth/pages/Signup";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "chat/:chatId",
        element: <ChatWindow />,
      },
    ],
  },
    {
    path: "/auth/signin",
    element: <SignIn />,
  },
  {
    path: "/auth/signup",
    element: <Signup />,
  },
]);