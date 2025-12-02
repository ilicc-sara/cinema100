import { data } from "../../../data[1]";
import { supabase } from "../../../supabase-client";

function useBaseData() {
  const refreshFn = async () => {
    const deleteData = () => {
      data.forEach(async (item) => {
        try {
          const { error } = await supabase
            .from("moviesData")
            .delete()
            .eq("rank", item.rank);

          if (error) {
            console.error("Error deleting task: ", error.message);
          }
        } catch (error: any) {
          console.error("Error deleting task: ", error.message);
        }
      });
    };

    const fetchData = () => {
      data.forEach(async (item) => {
        try {
          const { error } = await supabase
            .from("moviesData")
            .insert([
              {
                rank: item.rank,
                title: item.title,
                thumbnail: item.thumbnail,
                rating: item.rating,
                itemID: item.id,
                year: item.year,
                image: item.image,
                description: item.description,
                trailer: item.trailer,
                genre: item.genre.join(","),
                director: item.director.join(","),
                writers: item.writers.join(","),
                imdbid: item.imdbid,
              },
            ])
            .single();

          if (error) {
            console.error("Error adding movie: ", error.message);
          }
        } catch (error: any) {
          console.error("Error adding movie: ", error.message);
        }
      });
    };
    deleteData();
    fetchData();
  };

  return refreshFn;
}
export default useBaseData;
