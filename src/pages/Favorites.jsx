import React, { useContext } from "react";
import Layout from "../components/Layout";
import Container from "react-bootstrap/Container";
import { FavoritesContext } from "../store/favorites/context";
import NewsCardList from "../components/NewsCardList";
net;
function Favorites() {
  const { state } = useContext(FavoritesContext);

  return (
    <Layout>
      <Container>
        <h1>❤️ Favorite news ❤️</h1>
        {state.news.length > 0 ? (
          <NewsCardList newsList={state.news} />
        ) : (
          <p>No favorite news.</p>
        )}
      </Container>
    </Layout>
  );
}

export default Favorites;
