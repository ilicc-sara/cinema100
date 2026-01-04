import { useState, useCallback } from "react";
import { supabase } from "../../../supabase-client";
import type { singleMovie } from "../../../types";

// function useTrendingData(
//   setLoading: React.Dispatch<React.SetStateAction<boolean>>,
//   setCurrentlyTrending: React.Dispatch<
//     React.SetStateAction<singleMovie[] | null>
//   >
// ) {
//   const selectTrendingData = async () => {
//     setLoading(true);
//     try {
//       const { error, data } = await supabase.from("trendingMovies").select();
//       setLoading(false);
//       setCurrentlyTrending(data);
//       if (error) {
//         console.error("Error selecting trending data: ", error.message);
//         setLoading(false);
//       }
//     } catch (error: any) {
//       console.error("Error selecting trending data: ", error.message);
//       setLoading(false);
//     }
//   };

//   return selectTrendingData();
// }

// export default useTrendingData;

function useTrendingData() {
  const [currentlyTrending, setCurrentlyTrending] = useState<
    singleMovie[] | null
  >(null);

  const [error, setError] = useState<string | null>(null);

  const fetchTrendingData = useCallback(async () => {
    setError(null);

    try {
      const { data, error } = await supabase.from("trendingMovies").select();

      if (error) {
        throw error;
      }

      setCurrentlyTrending(data);
    } catch (err) {
      console.error(err);
      setError("Failed to load trending movies");
    } finally {
    }
  }, []);

  return {
    currentlyTrending,
    error,
    fetchTrendingData,
  };
}

export default useTrendingData;
