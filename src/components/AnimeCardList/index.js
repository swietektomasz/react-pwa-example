import React, { memo, lazy, Suspense } from "react";

import { useAnimeState } from "../../shared/context/animeContext";

import "./anime-card-list.css";

const AnimeCardList = memo(() => {
  const { animes } = useAnimeState();
  const AnimeCard = lazy(() => import("../../components/AnimeCard"));

  return (
    <div className="viewContainer">
      <Suspense fallback={<div>Loading...</div>}>
        {animes &&
          animes.map(anime => <AnimeCard key={anime.id} anime={anime} />)}
      </Suspense>
    </div>
  );
});

export { AnimeCardList };
