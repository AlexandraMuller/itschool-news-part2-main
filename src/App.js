import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useReducer } from "react";
import Page404 from "./pages/Page404";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import NewsCategory from "./pages/NewsCategory";
import NewsDetails from "./pages/NewsDetails";
import { FavoritesContext } from "./store/favorites/context";
import { favoritesReducer, initialState } from "./store/favorites/reducer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Page404 />,
  },
  {
    path: "/favorites",
    element: <Favorites />,
  },
  {
    path: "/category/:categoryId",
    element: <NewsCategory />,
  },
  {
    path: "/news/:newsId",
    element: <NewsDetails />,
  },
]);

function App() {
  const [state, dispatch] = useReducer(favoritesReducer, initialState);
  const favoritesContextValue = {
    state,
    dispatch,
  };

  return (
    <FavoritesContext.Provider value={favoritesContextValue}>
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </FavoritesContext.Provider>
  );
}

export default App;
