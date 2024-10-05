import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root/Root";
import Home from "../components/Home/Home";
import ListedBooks from "../components/ListedBooks/ListedBooks";
import PagesRead from "../components/PagesRead/PagesRead";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/listed-books",
        element: <ListedBooks></ListedBooks>,
      },
      {
        path: "/pages-read",
        element: <PagesRead></PagesRead>,
      },
    ],
  },
]);

export default router;
