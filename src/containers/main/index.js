import React from "react";

import { Filters } from "../../components/Filters";
import { AnimeCardList } from "../../components/AnimeCardList";
import { AnimeProvider } from "../../shared/context/animeContext";

import "./main-view.css";

function MainView() {
  return (
    <AnimeProvider>
      <Filters />
      <AnimeCardList />
    </AnimeProvider>
  );
}

export default MainView;
