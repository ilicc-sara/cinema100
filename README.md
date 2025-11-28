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
