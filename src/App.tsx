import Index from "./layout";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Sms from "./pages/sms";
import Favorite from "./pages/favorite";
import Login from "./pages/login";
import Regester from "./pages/regester";
import Profil from "./pages/profil";
import OnePruduct from "./pages/onePruduct";
import Add from "./pages/add";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Index />,
    },
    {
      path: "/:id",
      element: <OnePruduct />,
    },
    {
      path: "/sms",
      element: <Sms />,
    },
    {
      path: "/favorite",
      element: <Favorite />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Regester />,
    },

    {
      path: "/profil",
      element: <Profil />,
    },
    {
      path: "/add",
      element: <Add />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
