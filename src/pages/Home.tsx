import { useEffect, useState } from "react";
import { data } from "../data[1]";
import { supabase } from "../supabase-client";
import type { singleMovie } from "../types";

function Home() {
  const [movies, setMovies] = useState<singleMovie[] | null>(null);
  useEffect(() => {
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
                writers: item.writers.join(";"),
                imdbid: item.imdbid,
              },
            ])
            .single();

          if (error) {
            console.error("Error adding task: ", error.message);
          }
        } catch (error: any) {
          console.error("Error adding task: ", error.message);
        }
      });
    };

    deleteData();
    fetchData();
  }, []);

  const selectData = async () => {
    try {
      const { error, data } = await supabase.from("moviesData").select();

      console.log("data from select data: ", data);
      setMovies(data);

      if (error) {
        console.error("Error adding task: ", error.message);
      }
    } catch (error: any) {
      console.error("Error adding task: ", error.message);
    }
  };

  useEffect(() => {
    selectData();
  }, []);

  console.log("movies from movies state", movies);
  return (
    <>
      <nav className="bg-[#161d2f] flex justify-between items-center !px-20 !py-3">
        <div className="w-[fit-content] flex justify-center items-center gap-2">
          <img className="w-10 h-10" src="logo.png" />
          <h1 className="text-white font-medium text-xl">cinema 100</h1>
        </div>

        <div className="text-[#e8f0fe] text-lg font-medium flex gap-10">
          <p>Welcome back, Guest</p>

          <div className="flex gap-2">
            <p>Log out</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2.0"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M5.636 5.636a9 9 0 1012.728 0M12 3v9"
              ></path>
            </svg>
          </div>
        </div>
      </nav>
      <section>
        {/* <button
          onClick={() => selectData()}
          className="text-[#e8f0fe] border-[2px] border-solid border-[#e8f0fe] !px-2 hover:bg-red-300"
        >
          delete
        </button> */}

        <div className=" grid grid-cols-4 w-[80%] !mx-auto gap-5">
          {movies &&
            movies.map((item, index) => (
              <article className="text-[#e8f0fe]">
                <img className="" key={index} src={item.image} />
                <p className="text-base text-left font-medium">
                  {" "}
                  {item.title}{" "}
                </p>
                <div className="flex">
                  <i className="bxr  bxs-star"></i>
                </div>
              </article>
            ))}
        </div>
      </section>
    </>
  );
}

export default Home;
