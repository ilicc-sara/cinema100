import React from "react";
import { supabase } from "../../../supabase-client";
import type { Genres } from "../../../types";

function useGenres(
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  setGenres: React.Dispatch<React.SetStateAction<Genres[] | null>>
) {
  const selectGenres = async () => {
    setLoading(true);
    try {
      const { error, data } = await supabase.from("genres").select();
      setLoading(false);
      setGenres(data);
      if (error) {
        console.error("Error selecting genres: ", error.message);
        setLoading(false);
      }
    } catch (error: any) {
      console.error("Error selecting genres: ", error.message);
      setLoading(false);
    }
  };

  return selectGenres();
}

export default useGenres;
