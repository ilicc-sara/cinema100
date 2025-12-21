import React from "react";
import { supabase } from "../../../supabase-client";
// 1. u useCoutData definisi slidesAmount set slides Amount
// 2. makni loading
// - prvo stavi svu logiku unutar useEffect a onda vidi mogu li kako osloboditi toga useEffect
// 3. poziv ka supabase pomeri u poseban fajl (nakon sto napravim da radi)
// 4. na kraju funkcije return slidesAmount, setSlidesAmount
// 5. u komponenti treba da mogu napisati const {slidesAmount, setSlidesAmount} = useCountSlidesAmount()

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
