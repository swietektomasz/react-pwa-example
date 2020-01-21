import React, { memo, useReducer } from "react";

const AnimeStateContext = React.createContext();
const AnimeDispatchContext = React.createContext();

function animeReducer(state, action) {
  switch (action.type) {
    case "get": {
      return state;
    }

    case "set": {
      if (!action.payload) {
        return state;
      } else if (action.payload === state.animes) {
        return state;
      }
      return { ...state, animes: action.payload.Page.ANIME };
    }

    default: {
      throw new Error("Unhandled action type");
    }
  }
}

const initialState = { animes: [] };

const AnimeProvider = memo(({ children }) => {
  const [state, dispatch] = useReducer(animeReducer, initialState);

  return (
    <AnimeStateContext.Provider value={state}>
      <AnimeDispatchContext.Provider value={dispatch}>
        {children}
      </AnimeDispatchContext.Provider>
    </AnimeStateContext.Provider>
  );
});

function useAnimeState() {
  const context = React.useContext(AnimeStateContext);

  if (context === undefined) {
    throw new Error("State context must be used within a provider");
  }

  return context;
}

function useAnimeDispatch() {
  const context = React.useContext(AnimeDispatchContext);

  if (context === undefined) {
    throw new Error("Dispatch context must be used within a provider");
  }

  return context;
}

export { AnimeProvider, useAnimeState, useAnimeDispatch };
