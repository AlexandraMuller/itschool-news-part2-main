import React from "react";
import Layout from "../components/Layout";
import Container from "react-bootstrap/Container";
import { useFetch } from "../utils/hooks/useFetch";
import { getNewsCategoriesEndpoint } from "../api/endpoints";
import NewsCardList from "../components/NewsCardList";
import { getNewsList } from "../api/adaptors";
import { Link } from "react-router-dom";

function Home() {
  const technologyNewsEndpoint = getNewsCategoriesEndpoint("technology", 1, 6);
  const travelNewsEndpoint = getNewsCategoriesEndpoint("travel", 1, 6);
  const lifestyleNewsEndpoint = getNewsCategoriesEndpoint("lifeandstyle", 1, 6);
  const artNewsEndpoint = getNewsCategoriesEndpoint("artanddesign", 1, 6);
  const sportNewsEndpoint = getNewsCategoriesEndpoint("sport", 1, 6);

  let technologyData = useFetch(technologyNewsEndpoint);
  let travelData = useFetch(travelNewsEndpoint);
  let lifestyleData = useFetch(lifestyleNewsEndpoint);
  let artData = useFetch(artNewsEndpoint);
  let sportData = useFetch(sportNewsEndpoint);

  const adaptedTechnologyData = getNewsList(technologyData);
  const adaptedTravelData = getNewsList(travelData);
  const adaptedLifestyleData = getNewsList(lifestyleData);
  const adaptedArtData = getNewsList(artData);
  const adaptedSportData = getNewsList(sportData);

  return (
    <Layout>
      {" "}
      {/* ART AND DESIGN */}
      <section className="art-and-design my-5">
        <Container>
          <h1 className="mb-5 pt-3">Art&Design</h1>
          <NewsCardList newsList={adaptedArtData} />
          <p>
            See all technology related news in the section{" "}
            <Link to="/category/artanddesign" className="text-secondary">
              Art&Design
            </Link>
            .
          </p>
        </Container>
      </section>
      {/* TECH */}
      <section className="tech my-5">
        <Container>
          <h1 className="mb-5 pt-3">Tech</h1>
          <NewsCardList newsList={adaptedTechnologyData} />
          <p>
            See all technology related news in the section{" "}
            <Link to="/category/technology" className="text-secondary">
              Tech
            </Link>
            .
          </p>
        </Container>
      </section>
      {/* TRAVEL */}
      <section className="travel my-5">
        <Container>
          <h1 className="mb-5 pt-3">Travel</h1>
          <NewsCardList newsList={adaptedTravelData} />
          <p>
            See all technology related news in the section{" "}
            <Link to="/category/travel" className="text-secondary">
              Travel
            </Link>
            .
          </p>
        </Container>
      </section>
      {/* LIFESTYLE */}
      <section className="lifestyle my-5">
        <Container>
          <h1 className="mb-5 pt-3">Lifestyle</h1>
          <NewsCardList newsList={adaptedLifestyleData} />
          <p>
            See all technology related news in the section{" "}
            <Link to="/category/lifeandstyle" className="text-secondary">
              Lifestyle
            </Link>
            .
          </p>
        </Container>
      </section>
      {/* SPORT */}
      <section className="sport my-5">
        <Container>
          <h1 className="mb-5 pt-3">Sport</h1>
          <NewsCardList newsList={adaptedSportData} />
          <p>
            See all technology related news in the section{" "}
            <Link to="/category/sport" className="text-secondary">
              Sport
            </Link>
            .
          </p>
        </Container>
      </section>
      {/* favorites */}
      <section className="favorites my-5">
        <Container>
          <h1 className="mb-5 pt-3">Favorite</h1>
          <p>Do you want to save your favorite news to read them later?</p>
          <p>
            Within each news you will find a button through which you can add
            the news to favorites.
          </p>
          <p className="pb-3">
            Visit the{" "}
            <Link to="/favorites" className="text-secondary">
              Favorite
            </Link>{" "}
            section to see all the saved news.
          </p>
        </Container>
      </section>
    </Layout>
  );
}

export default Home;
