import { useState, useCallback } from "react";
import { supabase } from "../../../supabase-client";
import type { Genres } from "../../../types";

// function useGenres(
//   setLoading: React.Dispatch<React.SetStateAction<boolean>>,
//   setGenres: React.Dispatch<React.SetStateAction<Genres[] | null>>
// ) {
//   const selectGenres = async () => {
//     setLoading(true);
//     try {
//       const { error, data } = await supabase.from("genres").select();
//       setLoading(false);
//       setGenres(data);
//       if (error) {
//         console.error("Error selecting genres: ", error.message);
//         setLoading(false);
//       }
//     } catch (error: any) {
//       console.error("Error selecting genres: ", error.message);
//       setLoading(false);
//     }
//   };

//   return selectGenres();
// }

// export default useGenres;

function useGenres() {
  const [genres, setGenres] = useState<Genres[] | null>(null);

  const [error, setError] = useState<string | null>(null);

  const fetchGenres = useCallback(async () => {
    setError(null);

    try {
      const { data, error } = await supabase.from("genres").select();

      if (error) {
        throw error;
      }

      setGenres(data);
    } catch (err) {
      console.error(err);
      setError("Failed to load genres");
    } finally {
    }
  }, []);

  return {
    genres,
    error,
    fetchGenres,
  };
}

export default useGenres;
