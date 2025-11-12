import { useEffect, useRef } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import MovieItem from "./MovieItem";
import type { ActiveMoviesProps } from "../../../types";

function Movies({ activeMovies }: ActiveMoviesProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const splideEl = containerRef.current?.querySelector(".splide") as any;
    const splide = splideEl?.splide;
    console.log(containerRef);

    if (splide) {
      console.log("✅ Splide mounted!");

      splide.on("moved", (newIndex: number) => {
        console.log("🎬 Slide changed to:", newIndex);

        handleSlideChange(newIndex);
      });
    }

    return () => {
      splide?.off("moved");
    };
  }, []);

  const handleSlideChange = (index: number) => {
    console.log("⚡ Slide event triggered for slide:", index);
  };

  return (
    <div ref={containerRef}>
      <Splide
        options={{
          type: "loop",
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
        {activeMovies && activeMovies.length > 12 && (
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
        )}
        {activeMovies && activeMovies.length > 24 && (
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
        )}
        {activeMovies && activeMovies.length > 36 && (
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
        )}
        {activeMovies && activeMovies.length > 48 && (
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
        )}
        {activeMovies && activeMovies.length > 60 && (
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
        )}

        {activeMovies && activeMovies.length > 72 && (
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
        )}

        {activeMovies && activeMovies.length > 84 && (
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
        {activeMovies && activeMovies.length > 96 && (
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
  );
}

export default Movies;
