import { Splide, SplideSlide } from "@splidejs/react-splide";
import MovieItem from "./MovieItem";
import type { TrendingProps } from "../../../types";

function TrendingMovies({ currentlyTrending }: TrendingProps) {
  return (
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
          <div className="grid smallLT:grid-cols-4 max-smallLT:grid-cols-2 smallLT:gap-7 max-smallLT:gap-3 smallLT:!px-5 max-smallLT:!px-[0px] w-[90%] !mx-auto">
            {currentlyTrending.map((item, index) => {
              if (index <= 3) {
                return <MovieItem details={false} item={item} index={index} />;
              }
            })}
          </div>
        )}
      </SplideSlide>
      <SplideSlide>
        {currentlyTrending && (
          <div className="grid smallLT:grid-cols-4 max-smallLT:grid-cols-2 smallLT:gap-7 max-smallLT:gap-3 smallLT:!px-5 max-smallLT:!px-[0px] w-[90%] !mx-auto">
            {currentlyTrending.map((item, index) => {
              if (index > 3 && index <= 7) {
                return <MovieItem details={false} item={item} index={index} />;
              }
            })}
          </div>
        )}
      </SplideSlide>
      <SplideSlide>
        {currentlyTrending && (
          <div className="grid smallLT:grid-cols-4 max-smallLT:grid-cols-2 smallLT:gap-7 max-smallLT:gap-3 smallLT:!px-5 max-smallLT:!px-[0px] w-[90%] !mx-auto">
            {currentlyTrending.map((item, index) => {
              if (index > 7 && index <= 11) {
                return <MovieItem details={false} item={item} index={index} />;
              }
            })}
          </div>
        )}
      </SplideSlide>
      <SplideSlide>
        {currentlyTrending && (
          <div className="grid smallLT:grid-cols-4 max-smallLT:grid-cols-2 smallLT:gap-7 max-smallLT:gap-3 smallLT:!px-5 max-smallLT:!px-[0px] w-[90%] !mx-auto">
            {currentlyTrending.map((item, index) => {
              if (index > 11 && index <= 15) {
                return <MovieItem details={false} item={item} index={index} />;
              }
            })}
          </div>
        )}
      </SplideSlide>
      <SplideSlide>
        {currentlyTrending && (
          <div className="grid smallLT:grid-cols-4 max-smallLT:grid-cols-2 smallLT:gap-7 max-smallLT:gap-3 smallLT:!px-5 max-smallLT:!px-[0px] w-[90%] !mx-auto">
            {currentlyTrending.map((item, index) => {
              if (index > 15 && index <= 19) {
                return <MovieItem details={false} item={item} index={index} />;
              }
            })}
          </div>
        )}
      </SplideSlide>
    </Splide>
  );
}

export default TrendingMovies;
