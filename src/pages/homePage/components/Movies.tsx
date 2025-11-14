import { useEffect, useRef } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useCallback } from "react";
import MovieItem from "./MovieItem";
import type { ActiveMoviesProps } from "../../../types";

function Movies({ activeMovies }: ActiveMoviesProps) {
  return (
    <div className="grid grid-cols-4 gap-7 !px-5 ">
      {activeMovies?.map((item, index) => {
        return <MovieItem details={true} item={item} index={index} />;
      })}
    </div>
  );
}

export default Movies;
