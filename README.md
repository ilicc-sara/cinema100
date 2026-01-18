# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:
{/_ <button
onClick={() => selectData()}
className="text-[#e8f0fe] border-[2px] border-solid border-[#e8f0fe] !px-2 hover:bg-red-300" >
delete
</button> _/}

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs["recommended-typescript"],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

```// const fetchData = async () => {
    //   const { error, data } = await supabase
    //     .from("moviesData")
    //     .select("*")
    //     .order("created_at", { ascending: true });

    //   if (error) {
    //     console.error("Error reading task: ", error.message);
    //     return;
    //   }

    //   console.log(data);
    // };
```

napraviti tabelu trending movies
u nju ubaciti 20 filmova

za filmove ispod napraviti paginaciju
filmovi koji su potrebni za tu str

za prvu stranicu dohvatiti samo od 1. do 10. filma
za drugu isto tako ...

search- za pretrazivanje samo jedan film iz baze

pogledati kako povezati tabele u postgres ql bazi podataka
/////////////////////////////////////////////////////////////////////////////////////////////////////
onChange={(e) =>
setFilters((prev) => {
return { ...prev, search: e.target.value };
})

```// const findCertainMovie = async () => {
  //   try {
  //     const { error, data } = await supabase
  //       .from("moviesData")
  //       .select()
  //       .ilike("title", "%city%");

  //     console.log("single movie", data);

  //     if (error) {
  //       console.error("Error finding single movie: ", error.message);
  //     }
  //   } catch (error: any) {
  //     console.error("Error finding single movie: ", error.message);
  //   }
  // };
```

<!-- collecting genres directly from the base movies -->

```
  // useEffect(() => {
  //   const { search, activeGenre } = filters;
  //   if (!movies) return;

  //   let filteredMoviesTemp = [...movies];

  //   if (search) {
  //     filteredMoviesTemp = filteredMoviesTemp.filter((movie) =>
  //       movie.title.toLowerCase().includes(search.toLowerCase())
  //     );
  //   }
  //   if (activeGenre !== "all") {
  //     filteredMoviesTemp = filteredMoviesTemp.filter((movie) =>
  //       movie.genre.includes(activeGenre)
  //     );
  //   }

  //   setActiveMovies(filteredMoviesTemp);
  // }, [filters]);
```

<!-- FETCHING MOVIES DATA from movies data from supabase -->

```// useEffect(() => {
  //   const deleteData = () => {
  //     data.forEach(async (item) => {
  //       try {
  //         const { error } = await supabase
  //           .from("moviesData")
  //           .delete()
  //           .eq("rank", item.rank);

  //         if (error) {
  //           console.error("Error deleting task: ", error.message);
  //         }
  //       } catch (error: any) {
  //         console.error("Error deleting task: ", error.message);
  //       }
  //     });
  //   };

  //   const fetchData = () => {
  //     data.forEach(async (item) => {
  //       try {
  //         const { error } = await supabase
  //           .from("moviesData")
  //           .insert([
  //             {
  //               rank: item.rank,
  //               title: item.title,
  //               thumbnail: item.thumbnail,
  //               rating: item.rating,
  //               itemID: item.id,
  //               year: item.year,
  //               image: item.image,
  //               description: item.description,
  //               trailer: item.trailer,
  //               genre: item.genre.join(","),
  //               director: item.director.join(","),
  //               writers: item.writers.join(","),
  //               imdbid: item.imdbid,
  //             },
  //           ])
  //           .single();

  //         if (error) {
  //           console.error("Error adding task: ", error.message);
  //         }
  //       } catch (error: any) {
  //         console.error("Error adding task: ", error.message);
  //       }
  //     });
  //   };

  //   deleteData();
  //   fetchData();
  // }, []);
```

<!-- collecting trending movies from movies base -->

```// useEffect(() => {
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
```

 <Movies activeMovies={activeMovies} />

```// import { useEffect } from "react";
// import { data } from "../../data[1]";
// import { supabase } from "../../supabase-client";

// function useBaseData() {
//   const refreshFn = () => {
//     const deleteData = () => {
//       data.forEach(async (item) => {
//         try {
//           const { error } = await supabase
//             .from("moviesData")
//             .delete()
//             .eq("rank", item.rank);

//           if (error) {
//             console.error("Error deleting task: ", error.message);
//           }
//         } catch (error: any) {
//           console.error("Error deleting task: ", error.message);
//         }
//       });
//     };

//     const fetchData = () => {
//       data.forEach(async (item) => {
//         try {
//           const { error } = await supabase
//             .from("moviesData")
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
//       });
//     };
//     deleteData();
//     fetchData();
//   };

//   return () => refreshFn;
// }

// export default useBaseData;
```

selecting all movies data

```const selectData = async () => {
   setLoading(true);

   try {
     const { error, data } = await supabase.from("moviesData").select();

     setMovies(data);
     setLoading(false);

     if (error) {
       console.error("Error selecting data: ", error.message);
       setLoading(false);
     }
   } catch (error: any) {
     console.error("Error selecting data: ", error.message);
     setLoading(false);
   }
 };
```

xl:bg-red-400 desktop:bg-blue-400 laptop:bg-green-400 smallLT:bg-yellow-400 tablet:bg-fuchsia-400 mobile:bg-pink-400 smallmobile:bg-orange-400

PITAJ U CEMU JE RAZLIKA I IMA LI NEKA BITNA RAZLIKA IZMEDJU TYPE I INTERFACE

// Sign In Anonymously
// const signInUserAnonymously = async () => {
// try {
// const { data, error } = await supabase.auth.signInAnonymously();
// } catch (error) {
// console.error("an error occured");
// }
// };

COUNTING DATA

```
  // const selectCountData = async () => {
  //   setLoading(true);
  //   try {
  //     const { error, count } = await supabase
  //       .from("moviesData")
  //       .select("*", { count: "exact" });

  //     if (count) {
  //       const slidesCount = Array(Math.ceil(count / 12)).fill("");
  //       setSlidesAmount(slidesCount);
  //     }
  //     setLoading(false);
  //     if (error) {
  //       console.error("Error counting selected data: ", error.message);
  //       setLoading(false);
  //     }
  //   } catch (error: any) {
  //     console.error("Error counting selected data: ", error.message);
  //     setLoading(false);
  //   }
  // };
```

SELECTING TRENDING DATA FROM SUPABASE

```
// const selectTrendingData = async () => {
  //   setLoading(true);
  //   try {
  //     const { error, data } = await supabase.from("trendingMovies").select();
  //     setLoading(false);
  //     setCurrentlyTrending(data);
  //     if (error) {
  //       console.error("Error selecting trending data: ", error.message);
  //       setLoading(false);
  //     }
  //   } catch (error: any) {
  //     console.error("Error selecting trending data: ", error.message);
  //     setLoading(false);
  //   }
  // };
```

SELECTING GENRES FROM SUPABASE

```
// const selectGenres = async () => {
  //   setLoading(true);
  //   try {
  //     const { error, data } = await supabase.from("genres").select();
  //     setLoading(false);
  //     setGenres(data);
  //     if (error) {
  //       console.error("Error selecting genres: ", error.message);
  //       setLoading(false);
  //     }
  //   } catch (error: any) {
  //     console.error("Error selecting genres: ", error.message);
  //     setLoading(false);
  //   }
  // };
```

SELECTING ACTIVE MOVIES AND SETTING ACTIVE SLIDE WITH SUPABASE

```
  // const selectActiveSlideMovies = async (
  //   rangeIndex1: number,
  //   rangeIndex2: number
  // ) => {
  //   setLoading(true);
  //   try {
  //     const { error, data } = await supabase
  //       .from("moviesData")
  //       .select()
  //       .range(rangeIndex1, rangeIndex2);
  //     setActiveMovies(data);
  //     setLoading(false);
  //     if (error) {
  //       console.error("Error selecting data: ", error.message);
  //       setLoading(false);
  //     }
  //   } catch (error: any) {
  //     console.error("Error selecting data: ", error.message);
  //     setLoading(false);
  //   }
  //   setSearch("");
  // };
// selectActiveSlideMovies((activeSlide - 1) * 12, activeSlide * 12 - 1);
// selectActiveSlideMovies((activeSlide - 1) * 12, activeSlide * 12 - 1);
```

SET ACTIVE MOVIES ACCORDING TO THE ACTIVE GENRE OR ELSE RETURN TO SLIDE 1

```
// const findGenreMovies = async () => {
    //   setLoading(true);
    //   try {
    //     const { error, data } = await supabase
    //       .from("moviesData")
    //       .select()
    //       .ilike("genre", `%${activeGenre}%`)
    //       .limit(12);

    //     setActiveMovies(data);
    //     setActiveSlide(1);
    //     setLoading(false);

    //     if (error) {
    //       setLoading(false);
    //     }
    //   } catch (error: any) {
    //     setLoading(false);
    //   }
    // };
// findGenreMovies();
```

///////////////////////////////////////////////////////////////////////////////
////////// Provera da li postoji taj mejl u bazi
const checkIfUserExists = async (email: string) => {
const { data } = await supabase
.from("users")
.select()
.eq("email", email)
.maybeSingle();

    console.log(!!data);
    return !!data;

};

///////////////////////////////////////////////////////////////
// useEffect(() => {
// checkIfUserExists("moj mejl");
// }, []);
///////////////////////////////////////////////////////////////

```useEffect(() => {
    const token = localStorage.getItem("sb-yyocycmzxqjdvkwqlpzd-auth-token");

    if (token) {
      console.log("EEE", JSON.parse(token));
    } else {
      console.error("Nema tokena");
    }
  }, []);
```

```// console.log(user);
  // console.log(session?.user?.email);

  // const checkIfUserExists = async (email: string) => {
  //   const { error, data } = await supabase
  //     .from("users")
  //     .select()
  //     .eq("email", email)
  //     .single();

  //   if (data) {
  //     setUser(data?.name);
  //   }
  //   if (error) {
  //     console.error(error);
  //   }
  // };

  // useEffect(() => {
  //   checkIfUserExists("sarailic19160@gmail.com");
  // }, []);

  // useEffect(() => {
  //   const findUser = async () => {
  //     const { error, data } = await supabase
  //       .from("users")
  //       .select()
  //       .eq("email", session?.user?.email)
  //       .single();

  //     setUser(data.name);

  //     if (error) {
  //       console.error(error);
  //     }
  //   };

  //   findUser();
  // }, [session]);
```

////////////////////////////////////////////////////////////////////////////////
USE BASE DATA CUSTOM HOOK - RECOLLECTING MOVIES FROM THE SUPABASE - REFRESH
///

//
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

////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////
USE SELECTING SLIDE :

```
// import React from "react";
// import { supabase } from "../../../supabase-client";
// import type { singleMovie } from "../../../types";

// function useSelectSlide(
//   setLoading: React.Dispatch<React.SetStateAction<boolean>>,
//   setActiveMovies: React.Dispatch<React.SetStateAction<singleMovie[] | null>>,
//   setSearch: React.Dispatch<React.SetStateAction<string>>,
//   rangeIndex1: number,
//   rangeIndex2: number
// ) {
//   const selectActiveSlideMovies = async (
//     rangeIndex1: number,
//     rangeIndex2: number
//   ) => {
//     setLoading(true);
//     try {
//       const { error, data } = await supabase
//         .from("moviesData")
//         .select()
//         .range(rangeIndex1, rangeIndex2);
//       setActiveMovies(data);
//       setLoading(false);
//       if (error) {
//         console.error("Error selecting data: ", error.message);
//         setLoading(false);
//       }
//     } catch (error: any) {
//       console.error("Error selecting data: ", error.message);
//       setLoading(false);
//     }
//     setSearch("");
//   };

//   return selectActiveSlideMovies(rangeIndex1, rangeIndex2);
// }

// export default useSelectSlide;

// import { useState, useCallback } from "react";
// import { supabase } from "../../../supabase-client";
// import type { singleMovie } from "../../../types";

// function useSelectSlide() {
//   const [activeMovies, setActiveMovies] = useState<singleMovie[] | null>(null);

//   const [error, setError] = useState<string | null>(null);

//   const selectActiveSlideMovies = useCallback(
//     async (rangeIndex1: number, rangeIndex2: number) => {
//       setError(null);

//       try {
//         const { data, error } = await supabase
//           .from("moviesData")
//           .select()
//           .range(rangeIndex1, rangeIndex2);

//         if (error) {
//           throw error;
//         }

//         setActiveMovies(data);
//       } catch (err) {
//         console.error("Error selecting data:", err);
//         setError("Failed to load movies for selected slide");
//       }
//     },
//     []
//   );

//   return {
//     activeMovies,
//     setActiveMovies,
//     error,
//     selectActiveSlideMovies,
//   };
// }

// export default useSelectSlide;
```

///////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////
USE COUNT DATA - PREVIOUS CODE :
//

//

```
// 1. u useCoutData definisi slidesAmount set slides Amount
// 2. makni loading
// - prvo stavi svu logiku unutar useEffect a onda vidi mogu li kako osloboditi toga useEffect
// 3. poziv ka supabase pomeri u poseban fajl (nakon sto napravim da radi)
// 4. na kraju funkcije return slidesAmount, setSlidesAmount
// 5. u komponenti treba da mogu napisati const {slidesAmount, setSlidesAmount} = useCountSlidesAmount()

// function useCountData(
//   setLoading: React.Dispatch<React.SetStateAction<boolean>>,
//   setSlidesAmount: React.Dispatch<React.SetStateAction<string[] | null>>
// ) {
//   const selectCountData = async () => {
//     setLoading(true);
//     try {
//       const { error, count } = await supabase
//         .from("moviesData")
//         .select("*", { count: "exact" });

//       if (count) {
//         const slidesCount = Array(Math.ceil(count / 12)).fill("");
//         setSlidesAmount(slidesCount);
//       }
//       setLoading(false);
//       if (error) {
//         console.error("Error counting selected data: ", error.message);
//         setLoading(false);
//       }
//     } catch (error: any) {
//       console.error("Error counting selected data: ", error.message);
//       setLoading(false);
//     }
//   };

//   return selectCountData();
// }

// export default useCountData;
```

////////////////////////////////////////////////////////////
USE GENRES PREVOIUS CODE :

//

//

```// function useGenres(
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
```

/////////////////////////////////////////////////////////////////////////////////////
USE TRENDING DATA :

```
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
```

////////////////////////////////////////////////////////////////
log in i sign in functionality

```// Sign In
  const signInUser = async (email: string, password: string) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });

      if (error) {
        console.error("an error occured:", error);
        return { success: false, error: error.message };
      }
      console.log("sign-in success:", data);
      return { success: true, data };
    } catch (error) {
      console.error("an error occured:", error);
    }
  };

  const logInUser = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    try {
      const result: any | undefined = await signInUser(email, password);
      console.log("result", result);

      if (result.success) {
        navigate("/");
      }
      if (!result.success) {
        setError(result.error);
        toast.error(result.error);
      }
    } catch (error: any) {
      toast.error("error logging in", error);
      setError(`an error occured ${error}`);
    } finally {
      setLoading(false);
    }
  };
```

// next js i nuxt, astro framework
// napraviti jos jednu tabelu u supabase
// u toj tabeli upisati user id i movie id filma koji je kliknut (bookmarked movies)
// kada user dodje i klikne na bookmark movies - onda uradim dohvati mi za ovog usera sa ovim id-em sve bookmarkovane filmove
// join tables

// const userId = JSON.parse(token).user.id;
