import { useState, useEffect } from "react";
import { useQuery } from "@apollo/react-hooks";

import { useAnimeDispatch } from "../context/animeContext";
import { animeList } from "../../client/queries";

function SanitizeVariables(variables) {
  const variableCopy = { ...variables };
  Object.entries(variableCopy).map(([key, value]) => {
    if (value === "") {
      delete variableCopy[key];
    }
    return { key: value };
  });
  return variableCopy;
}

export function useFilters(filterValues) {
  const [currentFilterValues, setCurrentFilterValues] = useState(filterValues);
  const { data } = useQuery(animeList, {
    variables: SanitizeVariables(currentFilterValues)
  });

  const dispatch = useAnimeDispatch();

  useEffect(() => {
    dispatch({ type: "set", payload: data });
  }, [dispatch, data, filterValues]);

  return [currentFilterValues, setCurrentFilterValues];
}
