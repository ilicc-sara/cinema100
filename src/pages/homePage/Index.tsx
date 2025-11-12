import { useEffect, useState } from "react";
import { data } from "../../data[1]";
import { supabase } from "../../supabase-client";
import useBaseData from "./useBaseData";
import type { Filters, singleMovie } from "../../types";
import TrendingMovies from "./components/TrendingMovies";
import Movies from "./components/Movies";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

function Home() {
  const [movies, setMovies] = useState<singleMovie[] | null>(null);
  const [activeMovies, setActiveMovies] = useState<singleMovie[] | null>(null);

  const [currentlyTrending, setCurrentlyTrending] = useState<
    singleMovie[] | null
  >(null);

  const [genres, setGenres] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const [search, setSearch] = useState<string>("");
  const [activeGenre, setActiveGenre] = useState<string>("all");

  // const currentlyTrending = movies?.filter(
  //   (movie) => movie.rank >= 55 && movie.rank < 75
  // );

  // useEffect(() => {
  //   const deleteData = () => {
  //     data.forEach(async (item) => {
  //       if (item.rank >= 55 && item.rank < 75) {
  //         try {
  //           const { error } = await supabase
  //             .from("trendingMovies")
  //             .delete()
  //             .eq("rank", item.rank);

  //           if (error) {
  //             console.error("Error deleting task: ", error.message);
  //           }
  //         } catch (error: any) {
  //           console.error("Error deleting task: ", error.message);
  //         }
  //       } else return;
  //     });
  //   };

  //   const fetchData = () => {
  //     data.forEach(async (item) => {
  //       if (item.rank >= 55 && item.rank < 75) {
  //         try {
  //           const { error } = await supabase
  //             .from("trendingMovies")
  //             .insert([
  //               {
  //                 rank: item.rank,
  //                 title: item.title,
  //                 thumbnail: item.thumbnail,
  //                 rating: item.rating,
  //                 itemID: item.id,
  //                 year: item.year,
  //                 image: item.image,
  //                 description: item.description,
  //                 trailer: item.trailer,
  //                 genre: item.genre.join(","),
  //                 director: item.director.join(","),
  //                 writers: item.writers.join(","),
  //                 imdbid: item.imdbid,
  //               },
  //             ])
  //             .single();

  //           if (error) {
  //             console.error("Error adding task: ", error.message);
  //           }
  //         } catch (error: any) {
  //           console.error("Error adding task: ", error.message);
  //         }
  //       } else return;
  //     });
  //   };

  //   deleteData();
  //   fetchData();
  // }, []);

  const refreshFn = useBaseData();

  const selectData = async () => {
    setLoading(true);
    let genresArr: string[] = [];
    try {
      const { error, data } = await supabase.from("moviesData").select();

      // console.log("data from select data: ", data);
      setMovies(data);
      setActiveMovies(data);
      setLoading(false);

      if (data) {
        for (const element of data) {
          genresArr.push(...element.genre.split(","));
        }
        setGenres([...new Set(genresArr)]);
      }

      if (error) {
        console.error("Error selecting data: ", error.message);
        setLoading(false);
      }
    } catch (error: any) {
      console.error("Error selecting data: ", error.message);
      setLoading(false);
    }
  };

  const selectTrendingData = async () => {
    // setLoading(true);
    try {
      const { error, data } = await supabase.from("trendingMovies").select();

      // console.log("data from trending movies: ", data);

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

  useEffect(() => {
    selectData();
    selectTrendingData();
  }, []);

  useEffect(() => {
    if (!movies) return;

    let filteredMoviesTemp = [...movies];

    if (activeGenre !== "all") {
      filteredMoviesTemp = filteredMoviesTemp.filter((movie) =>
        movie.genre.includes(activeGenre)
      );
    }

    setActiveMovies(filteredMoviesTemp);
  }, [activeGenre]);

  const handleSumbit = async (e: any) => {
    e.preventDefault();
    try {
      const { error, data } = await supabase
        .from("moviesData")
        .select()
        .ilike("title", `%${search}%`);

      console.log("single movie", data?.length);

      if (data?.length === 0) {
        setSearch("");
        throw new Error(`No movies with this name: ${search}`);
      } else {
        setActiveMovies(data);
      }

      if (error) {
        toast.error(error.message);
      }
    } catch (error: any) {
      console.error("Error finding single movie: ", error.message);
    }
  };

  // function showToast() {
  //   toast.success("lkdnldkslkdf");
  // }

  return (
    <>
      <section>
        <ToastContainer position="top-center" />
        <div>
          <h1 className="text-left text-[#e8f0fe] w-[70%] !mx-auto text-2xl font-medium !my-5">
            Currently trending
          </h1>

          {/* <button
            onClick={() => showToast()}
            className="bg-[#fff] !my-5 cursor-pointer rounded"
          >
            Find Single Movie
          </button> */}

          <div className="w-[80%] !mx-auto relative">
            {loading && <div className="loader"></div>}
            <TrendingMovies currentlyTrending={currentlyTrending} />
          </div>
        </div>
        {/* <button onClick={() => refreshFn()}>Refresh</button> */}
        <div className="bg-[#161d2f] w-[80%] !mx-auto rounded-xl !py-3 !px-5 !my-10 flex justify-between items-center">
          <div className="bg-[#bfbfbf] w-[fit-content] flex items-center justify-between !py-1 rounded-lg cursor-pointer active:shadow-[0_0_0_5px_rgb(252,71,71)] ">
            <form onSubmit={handleSumbit}>
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="!pl-2 focus:outline-none focus:ring-0"
                type="text"
                placeholder="search"
              />
              <button type="submit" className="hidden"></button>
            </form>
            <button className="bg-[#bfbfbf] text-center !mx-2">
              <i className="bxr  bx-search"></i>
            </button>
          </div>

          <div className="flex justify-between items-center gap-3">
            <select
              onChange={(e) => setActiveGenre(e.target.value)}
              className="bg-[#bfbfbf] rounded"
            >
              <option value="all">All</option>
              {genres.map((genre, index) => (
                <option key={index} value={genre}>
                  {" "}
                  {genre}{" "}
                </option>
              ))}
            </select>
            <i className="bxr  bxs-bookmark"></i>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#fc4747"
              width="28"
              height="28"
            >
              <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z"></path>
              <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z"></path>
            </svg>
          </div>
        </div>
        <h1 className="text-left text-[#e8f0fe] w-[80%] !mx-auto text-2xl font-medium !mb-5">
          Top 100
        </h1>
        <div className="w-[80%] !mx-auto relative">
          {loading && <div className="loader"></div>}
          <Movies activeMovies={activeMovies} />
        </div>
      </section>
    </>
  );
}

export default Home;
