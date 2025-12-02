import React from "react";
import { supabase } from "../../../supabase-client";

function useCountData(
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  setSlidesAmount: React.Dispatch<React.SetStateAction<string[] | null>>
) {
  const selectCountData = async () => {
    setLoading(true);
    try {
      const { error, count } = await supabase
        .from("moviesData")
        .select("*", { count: "exact" });

      if (count) {
        const slidesCount = Array(Math.ceil(count / 12)).fill("");
        setSlidesAmount(slidesCount);
      }
      setLoading(false);
      if (error) {
        console.error("Error counting selected data: ", error.message);
        setLoading(false);
      }
    } catch (error: any) {
      console.error("Error counting selected data: ", error.message);
      setLoading(false);
    }
  };

  return selectCountData();
}

export default useCountData;
