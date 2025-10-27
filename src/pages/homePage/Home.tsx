import { useEffect, useState } from "react";
import { data } from "../../data[1]";
import { supabase } from "../../supabase-client";
import type { singleMovie } from "../../types";
import MovieItem from "./MovieItem";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Link } from "react-router";

function Home() {
  const [movies, setMovies] = useState<singleMovie[] | null>(null);
  const [activeMovies, setActiveMovies] = useState<singleMovie[] | null>(null);

  const [genres, setGenres] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const currentlyTrending = movies?.filter(
    (movie) => movie.rank >= 55 && movie.rank < 75
  );

  type FIlters = {
    search: string;
    activeGenre: string;
  };

  const [filters, setFilters] = useState<FIlters>({
    search: "",
    activeGenre: "all",
  });

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
    setLoading(true);
    let genresArr: string[] = [];
    try {
      const { error, data } = await supabase.from("moviesData").select();

      console.log("data from select data: ", data);
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
        console.error("Error adding task: ", error.message);
        setLoading(false);
      }
    } catch (error: any) {
      console.error("Error adding task: ", error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    selectData();
  }, []);

  useEffect(() => {
    const { search, activeGenre } = filters;
    if (!movies) return;

    let filteredMoviesTemp = [...movies];

    if (search) {
      filteredMoviesTemp = filteredMoviesTemp.filter((movie) =>
        movie.title.toLowerCase().includes(search.toLowerCase())
      );
    }
    if (activeGenre !== "all") {
      filteredMoviesTemp = filteredMoviesTemp.filter((movie) =>
        movie.genre.includes(activeGenre)
      );
    }

    setActiveMovies(filteredMoviesTemp);
  }, [filters]);

  return (
    <>
      <section>
        <div>
          <h1 className="text-left text-[#e8f0fe] w-[80%] !mx-auto text-2xl font-medium !my-5">
            Currently trending
          </h1>

          <div className="w-[80%] !mx-auto relative">
            {loading && <div className="loader"></div>}
            <Splide
              className="currently-trending-slider"
              options={{
                type: "slide",
                perPage: 1,
                gap: "1rem",
                rewind: true,
              }}
            >
              <SplideSlide>
                {currentlyTrending && (
                  <div className="grid grid-cols-4 gap-7 !px-5 ">
                    {currentlyTrending.map((item, index) => {
                      if (index <= 3) {
                        return (
                          <MovieItem
                            details={false}
                            item={item}
                            index={index}
                          />
                        );
                      }
                    })}
                  </div>
                )}
              </SplideSlide>
              <SplideSlide>
                {currentlyTrending && (
                  <div className="grid grid-cols-4 gap-7 !px-5 ">
                    {currentlyTrending.map((item, index) => {
                      if (index > 3 && index <= 7) {
                        return (
                          <MovieItem
                            details={false}
                            item={item}
                            index={index}
                          />
                        );
                      }
                    })}
                  </div>
                )}
              </SplideSlide>
              <SplideSlide>
                {currentlyTrending && (
                  <div className="grid grid-cols-4 gap-7 !px-5 ">
                    {currentlyTrending.map((item, index) => {
                      if (index > 7 && index <= 11) {
                        return (
                          <MovieItem
                            details={false}
                            item={item}
                            index={index}
                          />
                        );
                      }
                    })}
                  </div>
                )}
              </SplideSlide>
              <SplideSlide>
                {currentlyTrending && (
                  <div className="grid grid-cols-4 gap-7 !px-5 ">
                    {currentlyTrending.map((item, index) => {
                      if (index > 11 && index <= 15) {
                        return (
                          <MovieItem
                            details={false}
                            item={item}
                            index={index}
                          />
                        );
                      }
                    })}
                  </div>
                )}
              </SplideSlide>
              <SplideSlide>
                {currentlyTrending && (
                  <div className="grid grid-cols-4 gap-7 !px-5 ">
                    {currentlyTrending.map((item, index) => {
                      if (index > 15 && index <= 19) {
                        return (
                          <MovieItem
                            details={false}
                            item={item}
                            index={index}
                          />
                        );
                      }
                    })}
                  </div>
                )}
              </SplideSlide>
            </Splide>
          </div>
        </div>
        <div className="bg-[#161d2f] w-[80%] !mx-auto rounded-xl !py-3 !px-5 !my-10 flex justify-between items-center">
          <div className="bg-[#bfbfbf] w-[fit-content] flex items-center justify-between !py-1 rounded-lg cursor-pointer active:shadow-[0_0_0_5px_rgb(252,71,71)] ">
            <input
              value={filters.search}
              onChange={(e) =>
                setFilters((prev) => {
                  return { ...prev, search: e.target.value };
                })
              }
              className="!pl-2 focus:outline-none focus:ring-0"
              type="text"
              placeholder="search"
            />
            <button className="bg-[#bfbfbf] text-center !mx-2">
              <i className="bxr  bx-search"></i>
            </button>
          </div>

          <div className="flex justify-between items-center gap-3">
            <select
              onChange={(e) =>
                setFilters((prev) => {
                  return { ...prev, activeGenre: e.target.value };
                })
              }
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
          <Splide
            options={{
              type: "slide",
              perPage: 1,
              gap: "1rem",
              autoplay: false,
              pagination: true,
            }}
          >
            <SplideSlide>
              {activeMovies && (
                <div className="grid grid-cols-4 gap-7 !px-5 ">
                  {activeMovies.map((item, index) => {
                    if (index <= 11) {
                      return (
                        <MovieItem details={true} item={item} index={index} />
                      );
                    }
                  })}
                </div>
              )}
            </SplideSlide>
            <SplideSlide>
              {activeMovies && (
                <div className="grid grid-cols-4 gap-7 !px-5 ">
                  {activeMovies.map((item, index) => {
                    if (index > 11 && index <= 23) {
                      return (
                        <MovieItem details={true} item={item} index={index} />
                      );
                    }
                  })}
                </div>
              )}
            </SplideSlide>
            <SplideSlide>
              {activeMovies && (
                <div className="grid grid-cols-4 gap-7 !px-5 ">
                  {activeMovies.map((item, index) => {
                    if (index > 23 && index <= 35) {
                      return (
                        <MovieItem details={true} item={item} index={index} />
                      );
                    }
                  })}
                </div>
              )}
            </SplideSlide>
            <SplideSlide>
              {activeMovies && (
                <div className="grid grid-cols-4 gap-7 !px-5 ">
                  {activeMovies.map((item, index) => {
                    if (index > 35 && index <= 47) {
                      return (
                        <MovieItem details={true} item={item} index={index} />
                      );
                    }
                  })}
                </div>
              )}
            </SplideSlide>
            <SplideSlide>
              {activeMovies && (
                <div className="grid grid-cols-4 gap-7 !px-5 ">
                  {activeMovies.map((item, index) => {
                    if (index > 47 && index <= 59) {
                      return (
                        <MovieItem details={true} item={item} index={index} />
                      );
                    }
                  })}
                </div>
              )}
            </SplideSlide>
            <SplideSlide>
              {activeMovies && (
                <div className="grid grid-cols-4 gap-7 !px-5 ">
                  {activeMovies.map((item, index) => {
                    if (index > 59 && index <= 71) {
                      return (
                        <MovieItem details={true} item={item} index={index} />
                      );
                    }
                  })}
                </div>
              )}
            </SplideSlide>
            <SplideSlide>
              {activeMovies && (
                <div className="grid grid-cols-4 gap-7 !px-5 ">
                  {activeMovies.map((item, index) => {
                    if (index > 71 && index <= 83) {
                      return (
                        <MovieItem details={true} item={item} index={index} />
                      );
                    }
                  })}
                </div>
              )}
            </SplideSlide>
            {activeMovies && activeMovies.length > 83 && (
              <SplideSlide>
                {activeMovies && (
                  <div className="grid grid-cols-4 gap-7 !px-5 ">
                    {activeMovies.map((item, index) => {
                      if (index > 83 && index <= 95) {
                        return (
                          <MovieItem details={true} item={item} index={index} />
                        );
                      }
                    })}
                  </div>
                )}
              </SplideSlide>
            )}
            {activeMovies && activeMovies.length > 95 && (
              <SplideSlide>
                {activeMovies && (
                  <div className="grid grid-cols-4 gap-7 !px-5">
                    {activeMovies.map((item, index) => {
                      if (index > 95) {
                        return (
                          <MovieItem details={true} item={item} index={index} />
                        );
                      }
                    })}
                  </div>
                )}
              </SplideSlide>
            )}
          </Splide>
        </div>
      </section>
    </>
  );
}

export default Home;
