// import React from "react";
// import { supabase } from "../../../supabase-client";
// import type { singleMovie } from "../../../types";

// function useSelectSlide(
//   setLoading: React.Dispatch<React.SetStateAction<boolean>>,
//   setActiveMovies: React.Dispatch<React.SetStateAction<singleMovie[] | null>>,
//   setSearch: React.Dispatch<React.SetStateAction<string>>,
//   rangeIndex1: number,
//   rangeIndex2: number
// ) {
//   const selectActiveSlideMovies = async (
//     rangeIndex1: number,
//     rangeIndex2: number
//   ) => {
//     setLoading(true);
//     try {
//       const { error, data } = await supabase
//         .from("moviesData")
//         .select()
//         .range(rangeIndex1, rangeIndex2);
//       setActiveMovies(data);
//       setLoading(false);
//       if (error) {
//         console.error("Error selecting data: ", error.message);
//         setLoading(false);
//       }
//     } catch (error: any) {
//       console.error("Error selecting data: ", error.message);
//       setLoading(false);
//     }
//     setSearch("");
//   };

//   return selectActiveSlideMovies(rangeIndex1, rangeIndex2);
// }

// export default useSelectSlide;

import { useState, useCallback } from "react";
import { supabase } from "../../../supabase-client";
import type { singleMovie } from "../../../types";

function useSelectSlide() {
  const [activeMovies, setActiveMovies] = useState<singleMovie[] | null>(null);

  const [error, setError] = useState<string | null>(null);

  const selectActiveSlideMovies = useCallback(
    async (rangeIndex1: number, rangeIndex2: number) => {
      setError(null);

      try {
        const { data, error } = await supabase
          .from("moviesData")
          .select()
          .range(rangeIndex1, rangeIndex2);

        if (error) {
          throw error;
        }

        setActiveMovies(data);
      } catch (err) {
        console.error("Error selecting data:", err);
        setError("Failed to load movies for selected slide");
      }
    },
    []
  );

  return {
    activeMovies,
    setActiveMovies,
    error,
    selectActiveSlideMovies,
  };
}

export default useSelectSlide;
