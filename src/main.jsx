import ReactDOM from "react-dom/client";
import App from "./App";
import { Error } from "./component/Error";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Plan } from "./component/Plan";
import { GoogleGemini } from "./component/GoogleGemini";
import { About } from "./component/About";
import { Login } from "./component/Login";
import { Contact } from "./component/Contact";
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <GoogleGemini />,
      },
      {
        path: "/plans",
        element: <Plan />,
      },
      {
        path: "/about",
        element: <About />,
      },

      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
