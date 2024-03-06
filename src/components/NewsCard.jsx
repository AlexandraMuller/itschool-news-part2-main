import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { FavoritesContext } from "../store/favorites/context";
import { addToFavorites } from "../store/favorites/actions";
import { removeFromFavorites } from "../store/favorites/actions";
import favIcon from "../img/fav-icon.png";
import noFavIcon from "../img/no-fav-icon.png";
import "./NewsCard.css";

function NewsCard(props) {
  const { newsId, imgSrc, title, description } = props;
  const [isFavorite, setIsFavorite] = useState(false);
  const { dispatch } = useContext(FavoritesContext);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setIsFavorite(storedFavorites.includes(newsId));
  }, [newsId]);

  function handleAddToFavorites(news) {
    const actionResult = addToFavorites(news);
    dispatch(actionResult);
  }

  function handleRemoveFromFavorites(newsId) {
    const actionResult = removeFromFavorites(newsId);
    dispatch(actionResult);
  }

  function handleToggleFavorite() {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const updateFavorites = isFavorite
      ? storedFavorites.filter((id) => id !== newsId)
      : [...storedFavorites, newsId];
    localStorage.setItem("favorites", JSON.stringify(updateFavorites));

    if (isFavorite) {
      handleRemoveFromFavorites(newsId);
    } else {
      handleAddToFavorites({
        id: newsId,
        thumbnail: imgSrc,
        title,
        description,
      });
    }
    setIsFavorite(!isFavorite);
  }

  return (
    <Card className=" h-100">
      <Link to={`/news/${encodeURIComponent(newsId)}`}>
        <Card.Img variant="top" src={imgSrc} />

        <Card.Body className="title">
          <Card.Title className="text-center ">{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
      </Link>
      <button
        className="fav-button"
        onClick={() => {
          handleToggleFavorite();
        }}
      >
        {isFavorite ? <img src={favIcon} /> : <img src={noFavIcon} />}
      </button>
    </Card>
  );
}

export default NewsCard;
