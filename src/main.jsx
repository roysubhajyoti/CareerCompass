import ReactDOM from "react-dom/client";
import App from "./App";
import { Error } from "./component/Error";
import "./index.css";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import { Plan } from "./component/Plan";
import { GoogleGemini } from "./component/GoogleGemini";
import { About } from "./component/About";
import { Login } from "./component/Login";
import { Contact } from "./component/Contact";
import { SignUp } from "./component/SignUp";
import { ForgotPass } from "./component/ForgotPass";
import { ResetPass } from "./component/ResetPass";

// const log = window.localStorage.getItem("isLogged");
// const rem = window.localStorage.getItem("isRemem");

const ProtectedHome = () => {
  const isLoggedIn = sessionStorage.getItem("isLoggedInS") === "true";
  const isLoggedInLocal = window.localStorage.getItem("isLoggedInL") === "true";
  

  if (isLoggedIn) {
    return <GoogleGemini />;
  }
  else if (isLoggedInLocal) {
    return <GoogleGemini />;
  } else {
    return <Navigate to="/login" />;
  }
};

const ProtectedPlan = () => {
  const isLoggedIn = sessionStorage.getItem("isLoggedInS") === "true";
  const isLoggedInLocal = window.localStorage.getItem("isLoggedInL") === "true";

  if (isLoggedIn) {
    return <Plan />;
  }else if (isLoggedInLocal) {
    return <Plan />;
  } else {
    return <Navigate to="/login" />;
  }
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <ProtectedHome />,
      },
      {
        path: "/plans",
        element:<ProtectedPlan />,
      },
      {
        path: "/about",
        element:<About />,
      },

      {
        path: "/contact",
        element:<Contact />,
      },
      {
        path: "/login",
        element:<Login />,
      },
      {
        path: "/Signup",
        element: <SignUp />,
      },
      {
        path: "/forgot",
        element: <ForgotPass />,
      },
      {
        path: "/resetPassword/:id/:token",
        element: <ResetPass />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
