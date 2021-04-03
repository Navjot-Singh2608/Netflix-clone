import React from "react";

import Banner from "../banner/Banner";
import Navbar from "../navbar/Navbar";

import requests from "../../Request";
import "./HomeScreen.css";
import Row from "../row/Row";

function HomeScreen() {
  return (
    <div className="homeScreen">
      <Navbar />
      <Banner />

      <Row
        title="NETFLIX ORIGNALS"
        fetchUrl={requests.fetchNetflixOrignals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default HomeScreen;
