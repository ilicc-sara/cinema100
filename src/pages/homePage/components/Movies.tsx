import { Splide, SplideSlide } from "@splidejs/react-splide";
import MovieItem from "./MovieItem";
import type { ActiveMoviesProps } from "../../../types";

function Movies({ activeMovies }: ActiveMoviesProps) {
  return (
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
                return <MovieItem details={true} item={item} index={index} />;
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
                return <MovieItem details={true} item={item} index={index} />;
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
                return <MovieItem details={true} item={item} index={index} />;
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
                return <MovieItem details={true} item={item} index={index} />;
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
                return <MovieItem details={true} item={item} index={index} />;
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
                return <MovieItem details={true} item={item} index={index} />;
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
                return <MovieItem details={true} item={item} index={index} />;
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
                  return <MovieItem details={true} item={item} index={index} />;
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
                  return <MovieItem details={true} item={item} index={index} />;
                }
              })}
            </div>
          )}
        </SplideSlide>
      )}
    </Splide>
  );
}

export default Movies;
