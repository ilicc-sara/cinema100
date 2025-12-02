import React from "react";
import { supabase } from "../../../supabase-client";
import type { singleMovie } from "../../../types";

function useTrendingData(
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  setCurrentlyTrending: React.Dispatch<
    React.SetStateAction<singleMovie[] | null>
  >
) {
  const selectTrendingData = async () => {
    setLoading(true);
    try {
      const { error, data } = await supabase.from("trendingMovies").select();
      setLoading(false);
      setCurrentlyTrending(data);
      if (error) {
        console.error("Error selecting trending data: ", error.message);
        setLoading(false);
      }
    } catch (error: any) {
      console.error("Error selecting trending data: ", error.message);
      setLoading(false);
    }
  };

  return selectTrendingData();
}

export default useTrendingData;
