import { createBrowserRouter } from "react-router-dom";
import Creatorfrm from "../pages/create";
import Consulta from "../pages/consulta";
import AddP from "../pages/AddProduct";
import App from "../App";
import NotFound from "../pages/NotFound";
import Layout from "../pages/Layaout";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/consultar",
        element: <Consulta />,
      },
      {
        path: "/crear",
        element: <Creatorfrm />,
      },
      {
        path: "/addp",
        element: <AddP />,
      },
    ],
  },
]);
export default router;
